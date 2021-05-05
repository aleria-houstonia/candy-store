import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import Slider from "../Slider/Slider";
import CardDescription from "../CardDescription/CardDescription";
// import MultiCarousel from "../MultiCarousel/MultiCarousel";
const Home = ({ history }) => {
    console.log(history);
    return (
        <div>
            <Slider />
            <Carousel />
            <CardDescription />
            {/* <MultiCarousel history={history} /> */}
        </div>
    );
};

export default Home;
