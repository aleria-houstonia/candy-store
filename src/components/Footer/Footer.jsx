import React from "react";
import "./Footer.css";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-feat footer-div">
                <p className="footer-feat-title">AS FEATURED IN</p>

                <p className="footer-feat-text">
                    © 2021 ALL RIGHTS RESERVED
                    <br /> Di Bruno Bros.
                </p>
                <p className="footer-feat-text-two">PRIVACY POLICY</p>
            </div>

            <div className="footer-signup  footer-div">
                <p className="footer-signup-title">BE THE FIRST TO KNOW</p>
                <p className="footer-signup-text">
                    Check out Di Bruno’s latest culinary discoveries, events,
                    promotions, more!
                </p>
                <p className="footer-signup-text-two">
                    SIGN UP FOR OUR NEWSLETTER TODAY
                </p>
                <div className="footer-signup-inp">
                    <input
                        className="footer-inp-email"
                        type="text"
                        placeholder="Email"
                    />
                    <div className="footer-signup-inp-two">
                        <EmailIcon />
                    </div>
                </div>
            </div>
            <div className="footer-follow  footer-div">
                <p className="footer-follow-title"> FOLLOW DI BRUNO BROS.</p>
                <p className="footer-follow-text">
                    Stay connected for new Di Bruno products, promotions, sales
                    more!
                </p>
                <div className="footer-follow-social">
                    <FacebookIcon fontSize="large" />
                    <TwitterIcon fontSize="large" />
                    <YouTubeIcon fontSize="large" />
                    <PinterestIcon fontSize="large" />
                    <InstagramIcon fontSize="large" />
                </div>
                <div className="footer-follow-last">
                    <p className="footer-follow-text-two">
                        CULINARY PIONEERS SINCE 1939
                    </p>
                    <div className="footer-follow-logo">
                        {/* <img src="https://cdn3.bigcommerce.com/s-7c08qbh/templates/__custom/images/quality_guarantee_seal_white.png?t=1526915043" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
