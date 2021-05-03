import axios from "axios";
import React, { useReducer } from "react";
// import JSON_API from "../helpers/constants";
import {
    calcSubPrice,
    calcTotalPrice,
    getCountProductsInCart,
} from "../helpers/calcPrice";

export const productContext = React.createContext();

const INIT_STATE = {
    productData: [],
    productDetails: null,
    cart: {},
    cartLength: getCountProductsInCart(),
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, productData: action.payload };
        case "GET_PRODUCT_DETAILS":
            return { ...state, productDetails: action.payload };
        case "GET_CART":
            return { ...state, cart: action.payload };
        case "CHANGE_CART_COUNT":
            return { ...state, cartLength: action.payload };
        default:
            return state;
    }
};
const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const postProduct = (products) => {
        axios.post("http://localhost:8000/products", products);
        getProducts();
    };

    async function getProducts() {
        let { data } = await axios("http://localhost:8000/products");
        dispatch({
            type: "GET_PRODUCTS",
            payload: data,
        });
        // console.log(data);
    }
    async function getProductDetails(id) {
        let { data } = await axios(`http://localhost:8000/products/${id}`);
        console.log(data);
        dispatch({
            type: "GET_PRODUCT_DETAILS",
            payload: data,
        });
    }

    function addProductToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        console.log(cart);
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            };
        }
        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0,
        };

        let filteredCart = cart.products.filter(
            (elem) => elem.item.id === product.id
        );
        if (filteredCart.length > 0) {
            cart.product = cart.products.filter(
                (elem) => elem.item.id !== product.id
            );
        } else {
            console.log(cart.products);
            cart.products.push(newProduct);
        }

        newProduct.subPrice = calcSubPrice(newProduct);
        cart.totalPrice = calcTotalPrice(cart.products);
        localStorage.setItem("cart", JSON.stringify(cart));

        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.products.length,
        });
    }
    function getCart() {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                product: [],
                totalPrice: 0,
            };
        }
        dispatch({
            type: "GET_CART",
            payload: cart,
        });
    }
    function changeProductCount(count, id) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.products = cart.products.map((elem) => {
            if (elem.item.id === id) {
                elem.count = count;
                elem.subPrice = calcSubPrice(elem);
            }
            return elem;
        });
        cart.totalPrice = calcTotalPrice(cart.products);
        localStorage.setItem("cart", JSON.stringify(cart));
        getCart();
    }
    function checkProductInCart(id) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            };
        }
        let newCart = cart.products.filter((elem) => elem.item.id === id);
        return newCart.length > 0 ? true : false;
    }
    function deleteCartProducts(id) {
        let toDelete = JSON.parse(localStorage.getItem("cart"));
        toDelete.products = toDelete.products.filter(
            (elem) => elem.item.id !== id
        );
        localStorage.setItem("cart", JSON.stringify(toDelete));

        getCart();

        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: toDelete.products.length,
        });
    }

    async function deleteCard(id) {
        await axios.delete(`http://localhost:8000/products/${id}`);
        getProducts();
    }
    return (
        <productContext.Provider
            value={{
                productData: state.productData,
                productDetails: state.productDetails,
                cart: state.cart,
                cartLength: state.cartLength,
                postProduct,
                getProductDetails,
                getProducts,
                addProductToCart,
                getCart,
                changeProductCount,
                checkProductInCart,
                deleteCartProducts,
                deleteCard,
            }}
        >
            {children}
        </productContext.Provider>
    );
};
export default ProductsContextProvider;
