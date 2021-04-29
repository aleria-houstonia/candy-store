import React from "react";
import "./CardDescription.css";

const CardDescription = () => {
    return (
        <>
            <div className="card__description">
                <h2 className="item__title">
                    <strong>"DELICIOUS GIFTS FOR ANY OCCASION" </strong>
                </h2>
                <span> </span>

                <p className="item__p">
                    "Gourmet gift baskets are the perfect choice every time,
                    whether you’re buying for a loved one, an important business
                    client, or for yourself. After all, who doesn’t love an
                    overflowing crate filled with the finest artisanal cheeses
                    and smoked meats delivered straight to their door."
                </p>
            </div>
            <div className="card">
                <div className="card__item">
                    <div className="card__item_img">
                        <img src="https://cdn11.bigcommerce.com/s-7c08qbh/product_images/uploaded_images/mom-abbo-banner-home.jpg" />
                    </div>
                    <div className="card__item_text">
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
                            <button className="btn">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card__item">
                    <div className="card__item_text">
                        <h3 className="card-text">TRY SOMETHING NEW!</h3>
                        <p className="card_p">
                            Discover deliciousness, with new culinary finds
                            added every week. Find your new favorites, from
                            small-batch chocolates and traditionally-cured
                            charcuterie, to innovative preserves and the finest
                            cheeses.
                        </p>
                        <div className="card-btn">
                            <button className="btn">SHOP NOW</button>
                        </div>
                    </div>
                    <div className="card__item_img_second">
                        <img src="https://cdn11.bigcommerce.com/s-7c08qbh/product_images/uploaded_images/try-something-home-banner.jpg" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default CardDescription;
