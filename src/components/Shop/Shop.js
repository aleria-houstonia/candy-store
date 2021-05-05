import { Link } from "@material-ui/core";
import React from "react";
import "./Shop.css";

const Shop = () => {
    return (
        <>
            <div>
                <div className="title_img">
                    {/* <img src="https://cdn11.bigcommerce.com/s-7c08qbh/images/stencil/original/p/holiday_1400x260_2018web__36845.original.jpg'" /> */}
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
                    <div className="sidebar">
                        <a href="https://dibruno.com/gifts/gourmet-gift-boxes-and-cheese-plates/">
                            <div className="sidebar__menu1 menu-side">
                                <h4 className="sidebar__menu">
                                    <strong>
                                        Gourmet Gift Boxes and Cheese Plates
                                    </strong>
                                </h4>
                            </div>
                        </a>
                        <a href="https://dibruno.com/gifts/mothers-day/">
                            <div className="sidebar__menu2 menu-side">
                                <h4 className="sidebar__menu">
                                    <strong>Mother's Day</strong>
                                </h4>
                            </div>
                        </a>
                        <div className="sidebar__menu3 menu-side">
                            <a href="/products">
                                <h4 className="sidebar__menu">
                                    <strong>Free Shipping </strong>
                                </h4>
                            </a>
                        </div>
                        <a href="https://dibruno.com/gifts/virtual-pairings/">
                            <div className="sidebar__menu4 menu-side">
                                <h4 className="sidebar__menu">
                                    <strong> Virtual Pairings</strong>
                                </h4>
                            </div>
                        </a>
                        <a href="https://dibruno.com/gifts/monthly-clubs/">
                            <div className="sidebar__menu5 menu-side">
                                <h4 className="sidebar__menu">
                                    <strong> Monthly Clubs</strong>
                                </h4>
                            </div>
                        </a>
                        <a href="https://dibruno.com/corporate-gifting/">
                            <div className="sidebar__menu6 menu-side">
                                <h4 className="sidebar__menu">
                                    <strong> Corporate Gifting</strong>
                                </h4>
                            </div>
                        </a>
                        <a href="https://dibruno.com/gifts/best-sellers/">
                            <div className="sidebar__menu7 menu-side">
                                <h4 className="sidebar__menu">
                                    <strong> Best sellers</strong>
                                </h4>
                            </div>
                        </a>
                        <a href="https://dibruno.com/gifts/gift-cards/">
                            <div className="sidebar__menu8 menu-side">
                                <h4 className="sidebar__menu">
                                    <strong>Best Sellers </strong>{" "}
                                </h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
