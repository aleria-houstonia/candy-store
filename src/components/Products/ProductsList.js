import React, { useContext, useEffect } from "react";
import { productContext } from "../../contexts/ProductsContext";
import ProductCard from "./ProductCard";
import "./Products.css";
const ProductsList = () => {
    const { getProducts, productData } = useContext(productContext);
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div className="productList">
            {productData.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ProductsList;
