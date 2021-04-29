import React from "react";

const ProductCard = (props) => {
    return (
        <div>
            <div className="image-card">
                <img src={props.item.image} />
            </div>

            <div className="description-card">
                <p>{props.item.title}</p>
                <p>{props.item.overview}</p>
            </div>
            <button>Shop now</button>
        </div>
    );
};

export default ProductCard;
