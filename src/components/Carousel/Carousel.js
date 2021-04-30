import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

const MainCarousel = () => {
    return (
        <>
            <div className="carousel__item">
                <h2 className="item__title">
                    <strong>"DELICIOUS GIFTS FOR ANY OCCASION" </strong>
                </h2>

                <p className="item__p">
                    "Gourmet gift baskets are the perfect choice every time,
                    whether you’re buying for a loved one, an important business
                    client, or for yourself. After all, who doesn’t love an
                    overflowing crate filled with the finest artisanal cheeses
                    and smoked meats delivered straight to their door."
                </p>
            </div>
            <div className="carousel__item">
                <h2 className="item__title">
                    <strong>"SHOPPING FOR MOM? ENJOY FREE SHIPPING ON"</strong>
                </h2>
                <p className="item__p">
                    "Please note some products are seasonal and their
                    availability changes. Should any substitution be made, it
                    will be of the highest quality."
                </p>
            </div>
            <Carousel showThumbs={false}>
                <div>
                    <img src="https://cdn11.bigcommerce.com/s-7c08qbh/images/stencil/original/carousel/1096/mom-brunch-dsktop2.jpg?c=2" />
                </div>
                <div>
                    <img src="https://cdn11.bigcommerce.com/s-7c08qbh/images/stencil/original/carousel/1064/JAN-STOCK-UP.jpg?c=2" />
                </div>
            </Carousel>
        </>
    );
};

export default MainCarousel;
