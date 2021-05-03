import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="title">
                <div className="title_string">
                    <div className="title_string_item"> Shop Mother's day</div>
                </div>
            </div>

            <div className="navbar1">
                <div className="navbar__middle">
                    <div className="navbar__menu_logo">
                        <Link to="/">
                            <img
                                className="logo"
                                src="https://cdn11.bigcommerce.com/s-6b668f/product_images/uploaded_images/80yearlogo-700x115.png"
                            ></img>
                        </Link>
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
                                <a href="#">Blog</a>
                            </li>
                            <li class="navbar__item">
                            <Link to="/events">Events</Link>
                            </li>
                            <li class="navbar__item">
                                <a href="#">Contact</a>
                            </li>
                            <li class="navbar__item">
                                <a href="#">My account</a>
                                <b></b>
                            </li>
                            <li class="navbar__item">
                                <Link to="/cart">Cart</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navbar__third container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-default navbar-mobile bootsnav on">
                            <div className="navbar-header">
                                <button
                                    type="button "
                                    className="navbar-toggle"
                                    data-toggle="collapse"
                                    data-target="#navbar-menu"
                                >
                                    <i className="fa fa-bars"></i>
                                </button>
                            </div>
                            <div
                                className="collapse navbar-collapse"
                                id="navbar-menu"
                            >
                                <ul
                                    className="nav navbar-nav"
                                    data-in="fadeInDown"
                                    data-out="fadeOutUp"
                                >
                                    <li>
                                        <a href="#">
                                            {" "}
                                            GIFTS<span></span>{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-hover="About   ">
                                            {" "}
                                            CHEESE <span></span>{" "}
                                        </a>
                                    </li>
                                    <li className="" dropdown>
                                        <a
                                            href=""
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                            data-hover=" shortcodes"
                                        >
                                            {" "}
                                            FREE SHIPPING! <span></span>
                                        </a>
                                        <ul className="dropdown-menu animated">
                                            <li>
                                                {" "}
                                                <a href="">Custom menu</a>{" "}
                                                <a href="">Custom menu</a>
                                                <a href="">Custom menu</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="" dropdown>
                                        <Link
                                            to="/location"
                                            href=""
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                            data-hover=" shortcodes"
                                        >
                                            {" "}
                                            LOCATIONS <span></span>
                                        </Link>
                                    </li>
                                    <li className="" dropdown>
                                        <a
                                            href=""
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                            data-hover=" shortcodes"
                                        >
                                            {" "}
                                            CATERING <span></span>
                                        </a>
                                        <ul className="dropdown-menu animated">
                                            <li>
                                                {" "}
                                                <a href="">Custom menu</a>{" "}
                                                <a href="">Custom menu</a>
                                                <a href="">Custom menu</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
