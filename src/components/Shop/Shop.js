import React from "react";
import "./Shop.css";

const Shop = () => {
    return (
        <>
            <div>
                <div className="title_img">
                    <img src="https://cdn11.bigcommerce.com/s-7c08qbh/images/stencil/original/p/holiday_1400x260_2018web__36845.original.jpg'" />
                </div>
            </div>
            <br></br>
            <span></span>
            <div className="title__text">
                <h2>
                    <strong> DELICIOUS GIFTS FOR ANY OCCASION</strong>
                </h2>
                <br></br>
                <span></span>
                <p className="title__p_first">
                    <em>
                        Gourmet gift baskets are the perfect choice every time,
                        whether you’re buying for a loved one, an important
                        business client, or for yourself. After all, who doesn’t
                        love an overflowing crate filled with the finest
                        artisanal cheeses and smoked meats delivered straight to
                        their door.{" "}
                    </em>
                </p>
                <br></br>
                <span></span>
                <h2 className="title__text">
                    {" "}
                    SHOPPING FOR MOM? ENJOY FREE SHIPPING ON{" "}
                </h2>
                <br></br>
                <span></span>
                <p className="title__p">
                    <em>
                        {" "}
                        Please note some products are seasonal and their
                        availability changes. Should any substitution be made,
                        it will be of the highest quality..{" "}
                    </em>
                </p>
            </div>
            <div className="gifts">
                <div className="gifts__card">
                    <div className="wraper">
                        <div className="sidebar__menu">
                            <a href="#">
                                {" "}
                                <img src="https://cdn11.bigcommerce.com/s-7c08qbh/product_images/uploaded_images/fuhgettaboutiteditblock.jpg" />{" "}
                            </a>
                        </div>
                        <div className="sidebar__menu">
                            <a href="#">
                                {" "}
                                <img src="https://cdn3.bigcommerce.com/s-7c08qbh/templates/__custom/images/MomsDay_640x640.jpg?t=1531132412" />
                            </a>
                        </div>
                        <div className="sidebar__menu">
                            <a href="#">
                                <img src="https://cdn11.bigcommerce.com/s-7c08qbh/product_images/uploaded_images/free-ship640.jpg" />
                            </a>
                        </div>
                        <div className="sidebar__menu">
                            <a href="#">
                                <img src="https://cdn3.bigcommerce.com/s-7c08qbh/templates/__custom/images/category-stinky-funky.jpg" />
                            </a>
                        </div>
                        <div className="sidebar__menu">
                            <a href="#">
                                <img src=" https://cdn7.bigcommerce.com/s-7c08qbh/product_images/uploaded_images/monthly-640x640.jpg" />
                            </a>
                        </div>
                        <div className="sidebar__menu">
                            <a href="#">
                                <img src="https://cdn3.bigcommerce.com/s-7c08qbh/templates/__custom/images/GiftCard_640x640.jpg?t=1531132412" />
                            </a>
                        </div>
                        <div className="sidebar__menu">
                            <a href="#">
                                <img src=" https://cdn3.bigcommerce.com/s-7c08qbh/templates/__custom/images/coginewsquare.jpg?t=1531132412" />
                            </a>
                        </div>
                        <div className="sidebar__menu">
                            <a href="#">
                                <img src="https://cdn11.bigcommerce.com/s-7c08qbh/product_images/uploaded_images/cheesetools-640x640.jpg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
