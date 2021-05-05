import React from "react";
import "./CardDescription.css";
import AOS from "aos";
import "aos/dist/aos.css";

const CardDescription = () => {
    AOS.init();
    return (
        <>
            <div className="card__description">
                <h2 className="item__title">
                    <strong>"DELICIOUS GIFTS FOR ANY OCCASION" </strong>
                </h2>

                <p
                    className="item__first_text"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    {" "}
                    "Gourmet gift baskets are the perfect choice every time,
                    whether you’re buying for a <br /> loved one, an important
                    business client, or for yourself. After all, who doesn’t
                    love an overflowing crate filled <br /> with the finest
                    artisanal cheeses and smoked meats delivered straight to
                    their door."
                </p>
            </div>
            <div className="card">
                <div className="card__item">
                    <div
                        className="card__item_img"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <img
                            className="card__item_img"
                            src="https://cdn11.bigcommerce.com/s-7c08qbh/product_images/uploaded_images/mom-abbo-banner-home.jpg"
                        />
                    </div>
                    <div
                        className="card__item_text"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <h3 className="card-text">
                            OUR BEST SELLER FOR THE BEST MOM!
                        </h3>
                        <p className="card_p">
                            Send her an Italian snacking feast, The Abbondanza,
                            packed with zesty cheese spread, addictive Black
                            Lava Cashews, Aged Cheddar, caramels and more.
                            Mother's Day is Sunday, May 9th so shop now and
                            surprise her with gourmet delights!
                        </p>
                        <div className="card-btn">
                            {/* <button className="btn">SHOP NOW</button> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card__item">
                    <div
                        data-aos="fade-right"
                        className="card__item_text"
                        data-aos-duration="1000"
                    >
                        <h3 className="card-text">TRY SOMETHING NEW!</h3>
                        <p className="card_p">
                            Discover deliciousness, with new culinary finds
                            added every week. Find your new favorites, from
                            small-batch chocolates and traditionally-cured
                            charcuterie, to innovative preserves and the finest
                            cheeses.
                        </p>
                        <div className="card-btn">
                            {/* <button className="btn">SHOP NOW</button> */}
                        </div>
                    </div>
                    <div
                        className="card__item_img_second"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <img
                            className="card__item_img"
                            src="https://cdn11.bigcommerce.com/s-7c08qbh/product_images/uploaded_images/try-something-home-banner.jpg"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default CardDescription;
