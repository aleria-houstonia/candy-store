import React, { useContext, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import "./AllDescription.css";
import { productContext } from "../../contexts/ProductsContext";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const AllDescription = (props) => {
    const { productDetails, getProductDetails } = useContext(productContext);
    console.log(productDetails);
    useEffect(() => {
        getProductDetails(props.match.params.id);
    }, []);

    console.log(productDetails);
    const [value, setValue] = React.useState(2);
    return (
        <div>
            {productDetails ? (
                <div className="table">
                    <div className="table__cart">
                        <div className="table__cart_img">
                            <img src={productDetails.image} />
                        </div>
                        <div className="table__cart_desc">
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
                            <span></span>
                            <span></span>
                            <div className="table__cart_quick">
                                <strong>Quick Overview: </strong>
                            </div>
                            <div className="table__cart_quick_subtitle">
                                {productDetails.overview}
                            </div>
                            <div className="btn">
                                <Button
                                    style={{
                                        fontSize: "20px",
                                        border: "2px solid black",
                                    }}
                                >
                                    <a href="#aiperi">Full Description</a>
                                </Button>
                            </div>
                            <div id="aiperi ">{productDetails.description}</div>
                        </div>
                    </div>
                </div>
            ) : (
                "details"
            )}
        </div>
    );
};

export default AllDescription;
