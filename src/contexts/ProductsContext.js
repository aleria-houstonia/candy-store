import axios from "axios";
import React, { useReducer, useState } from "react";
// import JSON_API from "../helpers/constants";
import {
    calcSubPrice,
    calcTotalPrice,
    getCountProductsInCart,
} from "../helpers/calcPrice";

export const productContext = React.createContext();

const INIT_STATE = {
    productData: [],
    filterData: [],
    paginationPages: 1,
    productDetails: null,

    searchData: [],
    cart: {},
    cartLength: getCountProductsInCart(),
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "SEARCH":
            return { ...state, searchData: action.payload };
        case "GET_PRODUCTS":
            return {
                ...state,
                productData: action.payload.data,
                paginationPages: Math.ceil(
                    action.payload.headers["x-total-count"] / 6
                ),
            };
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

    const postProduct = (products, his) => {
        axios.post("http://localhost:8000/products", products);
        getProducts(his);
    };

    async function getProducts(history) {
        const search = new URLSearchParams(history.location.search);
        search.set("_limit", 6);
        history.push(`${history.location.pathname}?${search.toString()}`);
        let res = await axios.get(
            `http://localhost:8000/products${window.location.search}`
        );
        dispatch({
            type: "GET_PRODUCTS",
            payload: res,
        });
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
            cart.products = cart.products.filter(
                (elem) => elem.item.id !== product.id
            );
        } else {
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
    async function saveTopic(id, newTopic) {
        axios.patch(`http://localhost:8000/products/${id}`, newTopic);
        getProductDetails(id);
    }
    function changeProductCount(count, id) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.product = cart.products.map((elem) => {
            if (elem.item.id === id) {
                elem.count = count;
                elem.subPrice = calcSubPrice(elem);
            }
            return elem;
        });
        cart.totalPrice = calcTotalPrice(cart.product);
        localStorage.setItem("cart", JSON.stringify(cart));
        getCart();
    }
    function checkProductInCart(id) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                product: [],
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

    async function deleteCard(id, history) {
        await axios.delete(`http://localhost:8000/products/${id}`);
        getProducts(history);
    }
    async function searchh(value) {
        let { data } = await axios(`http://localhost:8000/products?q=${value}`);
        dispatch({
            type: "SEARCH",
            payload: data,
        });
    }
    return (
        <productContext.Provider
            value={{
                paginationPages: state.paginationPages,
                productData: state.productData,
                cart: state.cart,
                cartLength: state.cartLength,
                productDetails: state.productDetails,
                searchData: state.searchData,
                saveTopic,
                searchh,
                getProductDetails,
                postProduct,
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
