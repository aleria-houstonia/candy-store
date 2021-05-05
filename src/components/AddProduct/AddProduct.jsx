import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { productContext } from "../../contexts/ProductsContext";
import "./AddProduct.css";
const AddProduct = ({ history }) => {
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
        postProduct(product, history);
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
        <Container
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="adding-container">
                <input
                    className="add-input"
                    onChange={handleValues}
                    value={product.title}
                    type="text"
                    placeholder="title"
                    name="title"
                />
                <input
                    className="add-input"
                    onChange={handleValues}
                    value={product.price}
                    type="text"
                    placeholder="price"
                    name="price"
                />
                <input
                    className="add-input"
                    onChange={handleValues}
                    value={product.category}
                    type="text"
                    placeholder="category"
                    name="category"
                />
                <input
                    className="add-input"
                    onChange={handleValues}
                    value={product.titleOverview}
                    type="text"
                    placeholder="title-overview"
                    name="titleOverview"
                />
                <textarea
                    className="add-input"
                    type="text"
                    placeholder="quick overview:"
                    name="overview"
                    onChange={handleValues}
                    value={product.overview}
                ></textarea>
                <textarea
                    className="add-input"
                    type="text"
                    placeholder="description"
                    name="description"
                    onChange={handleValues}
                    value={product.description}
                ></textarea>
                <input
                    className="add-input"
                    onChange={handleValues}
                    value={product.image}
                    type="text"
                    placeholder="image"
                    name="image"
                />
            </div>
            <button className="button-add" onClick={handleClick}>
                Add
            </button>
        </Container>
    );
};

export default AddProduct;
