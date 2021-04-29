import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <>
            <div className="title">
                <div className="title_string">
                    <div className="title_string_item"> Shop Mother's day</div>
                </div>

                <div className="navbar">
                    <div className="navbar__middle">
                        <div className="navbar__menu_logo">
                            <img
                                className="logo"
                                src="https://cdn11.bigcommerce.com/s-6b668f/product_images/uploaded_images/80yearlogo-700x115.png"
                            ></img>
                        </div>
                        <div className="navbar__menu_search">
                            <form className="form" action="/search.php">
                                <input
                                    className="input-search"
                                    placeholder="Search here ..."
                                />
                            </form>
                        </div>

                        <div className="navbar__menu_item">
                            <ul className="navbar__menu menu__box">
                                <li class="navbar__item">
                                    <a href="#">
                                        <b>Blog</b>
                                    </a>
                                </li>
                                <li class="navbar__item">
                                    <a href="#">
                                        <b>Events</b>
                                    </a>
                                </li>
                                <li class="navbar__item">
                                    <a href="#">
                                        <b>Contact</b>
                                    </a>
                                </li>
                                <li class="navbar__item">
                                    <a href="#">
                                        <b>My account</b>
                                    </a>
                                    <b></b>
                                </li>
                                <li class="navbar__item">
                                    <a href="#">
                                        <b>Cart</b>
                                    </a>{" "}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
