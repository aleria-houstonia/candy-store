import axios from "axios";
import React, { useReducer } from "react";
// import JSON_API from "../helpers/constants";

export const productContext = React.createContext();

const INIT_STATE = {
    productData: [],
    productDetails: null,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, productData: action.payload };
        case "GET_PRODUCT_DETAILS":
            return { ...state, productDetails: action.payload };
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
    async function deleteCard(id) {
        await axios.delete(`http://localhost:8000/products/${id}`);
        getProducts();
    }
    return (
        <productContext.Provider
            value={{
                productData: state.productData,
                productDetails: state.productDetails,
                postProduct,
                getProductDetails,
                getProducts,
                deleteCard,
            }}
        >
            {children}
        </productContext.Provider>
    );
};
export default ProductsContextProvider;
