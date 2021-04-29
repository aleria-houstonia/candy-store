import React, { useContext, useState } from "react";
import { productContext } from "../../contexts/ProductsContext";
import "./AddProduct.css";
const AddProduct = () => {
    const { postProduct } = useContext(productContext);
    const [product, setProduct] = useState({
        title: "",
        price: "",
        titleOverview: "",
        overview: "",
        description: "",
        image: "",
    });
    const handleValues = (e) => {
        let newProduct = {
            ...product,
            [e.target.name]: e.target.value,
        };
        setProduct(newProduct);
    };
    const handleClick = () => {
        postProduct(product);
        setProduct({
            title: "",
            price: "",
            titleOverview: "",
            overview: "",
            description: "",
            image: "",
        });
    };
    return (
        <div className="adding-container">
            <input
                onChange={handleValues}
                value={product.title}
                type="text"
                placeholder="title"
                name="title"
            />
            <input
                onChange={handleValues}
                value={product.price}
                type="text"
                placeholder="price"
                name="price"
            />
            <input
                onChange={handleValues}
                value={product.titleOverview}
                type="text"
                placeholder="title-overview"
                name="titleOverview"
            />
            <textarea
                type="text"
                placeholder="quick overview:"
                name="overview"
                onChange={handleValues}
                value={product.overview}
            ></textarea>
            <textarea
                type="text"
                placeholder="description"
                name="description"
                onChange={handleValues}
                value={product.description}
            ></textarea>
            <input
                onChange={handleValues}
                value={product.image}
                type="text"
                placeholder="image"
                name="image"
            />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddProduct;
