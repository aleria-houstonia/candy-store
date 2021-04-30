import React from "react";
import { Button } from "@material-ui/core";
import "./AllDescription.css";

const AllDescription = () => {
    return (
        <div className="table">
            <div className="table__cart">
                <div className="table__cart_img">
                    <img src="https://cdn11.bigcommerce.com/s-7c08qbh/images/stencil/500x659/products/2582/7657/brunch_ecom1__40930.1617910716.jpg?c=2" />
                </div>
                <div className="table__cart_desc">
                    <div className="table__cart_subtitle">
                        <h4 className="table__cart_subtitle">
                            {" "}
                            DI BRUNO BROS.
                        </h4>
                    </div>
                    <div className="table__cart_title">
                        <h4 className="table__cart_title">
                            JUST FOR MOM GIFT BOX.
                        </h4>
                    </div>
                    <span></span>
                    <span></span>
                    <div className="table__cart_quick">
                        <strong>Quick Overview: </strong>
                    </div>
                    <div className="table__cart_quick_subtitle">
                        To all the moms who put family before themselves, it’s
                        time to gift a blissful ‘treat yourself' moment. Pamper
                        her with a refreshing moisturizer, decadent chocolate,
                        freshly-scented candle, and sweet caramel candies she
                        can stash throughout purses and car consoles alike. It’s
                        all she’ll need to escape reality, even if it’s only for
                        a minute.
                    </div>
                    <div className="btn">
                        <Button
                            style={{
                                fontSize: "20px",
                                border: "2px solid black",
                            }}
                        >
                            Full Description
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllDescription;
