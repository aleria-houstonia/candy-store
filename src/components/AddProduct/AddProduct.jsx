import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { productContext } from "../../contexts/ProductsContext";
import { Button } from "@material-ui/core";
import "./AddProduct.css";
const AddProduct = () => {
    const { postProduct } = useContext(productContext);
    const [product, setProduct] = useState({
        title: "",
        price: "",
        category: "",
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
            category: "",
            titleOverview: "",
            overview: "",
            description: "",
            image: "",
        });
    };
    return (
        <div className="adding_list">
            <div className="adding-container">
                <div className="adding_inp">
                    <input
                        onChange={handleValues}
                        value={product.title}
                        type="text"
                        placeholder="title"
                        name="title"
                    />
                </div>
                <div className="adding_inp">
                    <input
                        onChange={handleValues}
                        value={product.price}
                        type="text"
                        placeholder="price"
                        name="price"
                    />
                </div>
                <div className="adding_inp">
                    <input
                        onChange={handleValues}
                        value={product.titleOverview}
                        type="text"
                        placeholder="title-overview"
                        name="titleOverview"
                    />
                </div>
                <div className="adding_textarea">
                    <textarea
                        type="text"
                        placeholder="quick overview:"
                        name="overview"
                        onChange={handleValues}
                        value={product.overview}
                    ></textarea>
                </div>
                <div className="adding_textarea">
                    <textarea
                        type="text"
                        placeholder="description"
                        name="description"
                        onChange={handleValues}
                        value={product.description}
                    ></textarea>
                </div>
                <div className="adding_inp">
                    <input
                        onChange={handleValues}
                        value={product.image}
                        type="text"
                        placeholder="image"
                        name="image"
                    />
                </div>
                <div className="adding_btn">
                    <Button
                        style={{
                            fontSize: "20px",
                            border: "2px solid black",
                            width: "300px",
                        }}
                        onClick={handleClick}
                    >
                        Add
                    </Button>
                </div>
                {/* <button onClick={handleClick}>Add</button> */}
            </div>
        </div>
    );
};

export default AddProduct;
