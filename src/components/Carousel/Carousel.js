import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const MainCarousel = () => {
    AOS.init();

    return (
        <>
            <div className="carousel__item">
                <h2
                    className="item__title fade-in"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    <strong>"DELICIOUS GIFTS FOR ANY OCCASION" </strong>
                </h2>

                <p
                    className="item__p fade-in"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    "Gourmet gift baskets are the perfect choice every time,
                    whether you’re buying for a loved one, an important business
                    client, or for yourself. After all, who doesn’t love an
                    overflowing crate filled with the finest artisanal cheeses
                    and smoked meats delivered straight to their door."
                </p>
            </div>
            <div className="carousel__item">
                <h2
                    className="item__title fade-in"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    <strong>"SHOPPING FOR MOM? ENJOY FREE SHIPPING ON"</strong>
                </h2>
                <p
                    className="item__p fade-in"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
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
