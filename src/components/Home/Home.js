import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import Slider from "../Slider/Slider";
import CardDescription from "../CardDescription/CardDescription";
const Home = () => {
    return (
        <div>
            <Slider />
            <Carousel />
            <CardDescription />
        </div>
    );
};

export default Home;
