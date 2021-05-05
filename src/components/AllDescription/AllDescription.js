import React, { useContext, useEffect, useRef, useState } from "react";
import { Button } from "@material-ui/core";
import "./AllDescription.css";
import { productContext } from "../../contexts/ProductsContext";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useAuth } from "../../contexts/AuthContext";
import { adminUID } from "../../helpers/API";

const AllDescription = (props) => {
    const [editStatus, setEditStatus] = useState(false);
    const [editedTopic, setEditedTopic] = useState({});
    const {
        productDetails,
        getProductDetails,
        saveTopic,
        addProductToCart,
    } = useContext(productContext);
    const { currentUser } = useAuth();
    const [value, setValue] = React.useState(2);

    useEffect(() => {
        getProductDetails(props.match.params.id);
    }, []);

    const handleValue = (e) => {
        let newTopic = {
            ...editedTopic,
            [e.target.name]: e.target.value,
        };
        setEditedTopic(newTopic);
    };
    useEffect(() => {
        getProductDetails(props.match.params.id);
    }, [editStatus]);
    const handleSave = () => {
        setEditStatus(false);
        saveTopic(props.match.params.id, editedTopic);
    };

    return (
        <div>
            {productDetails ? (
                <div className="table">
                    {editStatus ? (
                        <div className="edit-textareas">
                            <textarea
                                name="image"
                                onChange={handleValue}
                                className="edit-details_items"
                            >
                                {productDetails.image}
                            </textarea>
                            <textarea
                                name="title"
                                onChange={handleValue}
                                className="edit-details_items"
                            >
                                {productDetails.title}
                            </textarea>
                            <textarea
                                name="category"
                                onChange={handleValue}
                                className="edit-details_items"
                                placeholder="category"
                            >
                                {productDetails.category}
                            </textarea>
                            <textarea
                                name="overview"
                                onChange={handleValue}
                                className="edit-details_items"
                            >
                                {productDetails.overview}
                            </textarea>
                            <textarea
                                name="description"
                                onChange={handleValue}
                                className="edit-details_items"
                            >
                                {productDetails.description}
                            </textarea>
                            <button onClick={handleSave}>
                                {/* <img src="https://www.shareicon.net/data/512x512/2015/06/23/58789_add_512x512.png" /> */}
                                Сохранить
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className="table__cart">
                                <div className="table__cart_img">
                                    <img
                                        src={productDetails.image}
                                        className="demo-trigger"
                                    />
                                </div>
                                <div className="table__cart_desc   detail">
                                    <Box
                                        component="fieldset"
                                        mb={3}
                                        borderColor="transparent"
                                        style={{ textAlign: "center" }}
                                    >
                                        <Typography
                                            component="legend"
                                            style={{ fontSize: "13px" }}
                                        >
                                            Customer Reviews
                                        </Typography>
                                        <Rating
                                            size="large"
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </Box>
                                    <div className="table__cart_subtitle">
                                        <h4 className="table__cart_subtitle">
                                            {" "}
                                            JUST FOR MOM GIFT BOX.
                                        </h4>
                                    </div>
                                    <div className="table__cart_title">
                                        <h4 className="table__cart_title">
                                            {productDetails.title}
                                        </h4>
                                    </div>
                                    <div className="table__cart_quick">
                                        <strong>Quick Overview: </strong>
                                    </div>
                                    <div className="table__cart_quick_subtitle">
                                        {productDetails.overview}
                                    </div>
                                    <div className="table-price">
                                        ${productDetails.price}
                                    </div>
                                </div>
                            </div>
                            <div id="aiperi " className="table-desc">
                                {productDetails.description}
                            </div>
                        </div>
                    )}
                    <div className="buttons-description">
                        {currentUser && currentUser.uid === adminUID ? (
                            <div>
                                <button
                                    className="button-des"
                                    onClick={() => setEditStatus(true)}
                                >
                                    {/* <img src="https://www.freeiconspng.com/uploads/edit-icon-orange-pencil-0.png" /> */}
                                    Edit
                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>
            ) : (
                "details"
            )}
        </div>
    );
};

export default AllDescription;
