import React from "react";
import "./Slider.css";
import video from "../assets/Video/2.mp4";

const Slider = () => {
    return (
        <div className="video-container">
            <div className="full-screen">
                <video
                    // controls
                    autoPlay
                    loop
                    muted
                    className="full-screen__video"
                >
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Slider;
