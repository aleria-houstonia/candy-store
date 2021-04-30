import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { BorderTop } from "@material-ui/icons";
import React from "react";
import "./Location.css";

const useStyles = makeStyles({
    root: {
        width: 450,
        // height: 300,
    },
    media: {
        height: 240,
        width: 450,
    },
});
const Locations = () => {
    const classes = useStyles();
    return (
        <div className="location">
            <div className="location-main-image">
                <img src="https://cdn11.bigcommerce.com/s-7c08qbh/product_images/uploaded_images/banner-bottle2.jpg" />
            </div>
            <div className="location-text">
                <p className="location-text_title"> EXPLORE OUR LOCATIONS!</p>
                <p className="location-text_description">
                    We are incredibly proud to have six retail locations in and
                    around Philly, as well as multiple bottle shops and an
                    outdoor Piazza in <br /> the heart of the Italian Market.
                    Each location offers a unique mix of services and products,
                    so find a store near you <br /> and pay us a visit!
                </p>
            </div>
            <div className="location-card">
                <Card
                    className={classes.root}
                    style={{
                        marginBottom: "55px",
                    }}
                >
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://cdn11.bigcommerce.com/s-7c08qbh/product_images/uploaded_images/rittenhouse-storefront-web.jpg?t=1617972453"
                            title="Contemplative Reptile"
                        />
                        <CardContent
                            style={{
                                background: "#222222",
                                padding: "30px 0",
                                marginBottom: "25px",
                            }}
                        >
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "20px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily:
                                        "Montserrat Arial Helvetica sans-serif",
                                }}
                            >
                                RITTENHOUSE SQUARE
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "16px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily: "Assistant",
                                }}
                            >
                                1730 Chestnut Street — Philadelphia, PA 19103
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "26px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "#e8af55",
                                    fontFamily: "proxima-nova Helvetica Arial",
                                }}
                            >
                                215.665.9220
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "16px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily: "Assistant",
                                }}
                            >
                                Mon. - Sun. 7:00am - 8:00pm
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                style={{
                                    fontSize: "20px",
                                    letterSpacing: 0,
                                    lineHeight: "24px",
                                    textAlign: "center",
                                    color: "#222",
                                    fontFamily:
                                        "proxima-nova Helvetica Arial sans-serif",
                                }}
                            >
                                The full Di Bruno Bros. experience, with cafe
                                and bar serving small plates, Roman-style pizza,
                                and apéritifs made with neighboring the
                                Lancaster County best-in-class ingredients.
                                Check back for info on our reopening.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            borderTop: "1px solid gray",
                        }}
                    >
                        <Button style={{ fontSize: "20px" }}>More Info</Button>
                    </CardActions>
                </Card>
                <Card
                    className={classes.root}
                    style={{
                        marginBottom: "55px",
                    }}
                >
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://cdn11.bigcommerce.com/s-7c08qbh/product_images/uploaded_images/catering-grid.jpg?t=1613426246"
                        />
                        <CardContent
                            style={{ background: "#222222", padding: "30px 0" }}
                        >
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "20px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily:
                                        "Montserrat Arial Helvetica sans-serif",
                                }}
                            >
                                EVENTS & CATERING
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "16px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily: "Assistant",
                                }}
                            >
                                435 Fairmount Ave — Philadelphia, PA 19123
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "26px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "#e8af55",
                                    fontFamily: "proxima-nova Helvetica Arial",
                                }}
                            >
                                215.665.1659
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                style={{
                                    fontSize: "20px",
                                    letterSpacing: 0,
                                    lineHeight: "24px",
                                    textAlign: "center",
                                    color: "#222",
                                    fontFamily:
                                        "proxima-nova Helvetica Arial sans-serif",
                                }}
                            >
                                Speak to our catering experts today and plan an
                                unforgettable of the Main Line culinary
                                event.Speak to our catering experts today and
                                plan an unforgettable culinary event. Located in
                                the heart of the Main Line plan an unforgettable
                                culinary event.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            borderTop: "1px solid gray",
                        }}
                    >
                        <Button style={{ fontSize: "20px" }}>More Info</Button>
                    </CardActions>
                </Card>
                <Card
                    className={classes.root}
                    style={{
                        marginBottom: "55px",
                    }}
                >
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://cdn11.bigcommerce.com/s-7c08qbh/product_images/uploaded_images/wayne-web.jpg?t=1617972454"
                        />
                        <CardContent
                            style={{ background: "#222222", padding: "30px 0" }}
                        >
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "20px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily:
                                        "Montserrat Arial Helvetica sans-serif",
                                }}
                            >
                                WAYNE
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "16px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily: "Assistant",
                                }}
                            >
                                375 W. Lancaster Ave. — Wayne, PA 19087
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "26px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "#e8af55",
                                    fontFamily: "proxima-nova Helvetica Arial",
                                }}
                            >
                                484.581.7888
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "16px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily: "Assistant",
                                }}
                            >
                                Café Di Bruno <br /> Mon. - Sun. 7:00am - 6:00pm{" "}
                                <br />
                                Marketplac <br /> e Mon. - Sat. 9:00 am – 8:00
                                pm <br /> Sun. 9:00 am – 7:00 pm
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                style={{
                                    fontSize: "20px",
                                    letterSpacing: 0,
                                    lineHeight: "24px",
                                    textAlign: "center",
                                    color: "#222",
                                    fontFamily:
                                        "proxima-nova Helvetica Arial sans-serif",
                                }}
                            >
                                Our newest culinary destination in the Main
                                Line, neighboring the Lancaster County Farmers
                                Market reopening.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            borderTop: "1px solid gray",
                        }}
                    >
                        <Button style={{ fontSize: "20px" }}>More Info</Button>
                    </CardActions>
                </Card>
                <Card
                    className={classes.root}
                    style={{
                        marginBottom: "55px",
                    }}
                >
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://cdn11.bigcommerce.com/s-7c08qbh/product_images/uploaded_images/curbside-location-square.jpg?t=1613426248"
                        />
                        <CardContent
                            style={{ background: "#222222", padding: "30px 0" }}
                        >
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "20px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily:
                                        "Montserrat Arial Helvetica sans-serif",
                                }}
                            >
                                CURBSIDE PICKUP
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "16px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily: "Assistant",
                                }}
                            >
                                Local Delivery or Pickup
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "26px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "#e8af55",
                                    fontFamily: "proxima-nova Helvetica Arial",
                                }}
                            >
                                215.665.9220
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "16px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily: "Assistant",
                                }}
                            >
                                Hours depending by location
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                style={{
                                    fontSize: "20px",
                                    letterSpacing: 0,
                                    lineHeight: "24px",
                                    textAlign: "center",
                                    color: "#222",
                                    fontFamily:
                                        "proxima-nova Helvetica Arial sans-serif",
                                }}
                            >
                                {" "}
                                Shop your favorite retail location from the
                                comforts of home! The full Di Bruno Bros.
                                experience, with cafe and bar serving small
                                plates, Roman-style pizza, and apéritifs made
                                with best-in-class ingredients. Check back for
                                info on our reopening.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            borderTop: "1px solid gray",
                        }}
                    >
                        <Button style={{ fontSize: "20px" }}>More Info</Button>
                    </CardActions>
                </Card>
                <Card
                    className={classes.root}
                    style={{
                        marginBottom: "55px",
                    }}
                >
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://cdn11.bigcommerce.com/s-7c08qbh/product_images/uploaded_images/bottle-shop-web.jpg?t=1617972440"
                        />
                        <CardContent
                            style={{ background: "#222222", padding: "30px 0" }}
                        >
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "20px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily:
                                        "Montserrat Arial Helvetica sans-serif",
                                }}
                            >
                                9TH STREET BOTTLE SHOP
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "16px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily: "Assistant",
                                }}
                            >
                                920 S. 9th St. — Philadelphia, PA 19147
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "26px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "#e8af55",
                                    fontFamily: "proxima-nova Helvetica Arial",
                                }}
                            >
                                215.560.8745
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "16px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily: "Assistant",
                                }}
                            >
                                Mon. - Thur. 12:00pm - 7:00pm <br />
                                Fri. - Sat. 11:00am - 8:00pm <br />
                                Sun. 11:00am - 6:00pm
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                style={{
                                    fontSize: "20px",
                                    letterSpacing: 0,
                                    lineHeight: "24px",
                                    textAlign: "center",
                                    color: "#222",
                                    fontFamily:
                                        "proxima-nova Helvetica Arial sans-serif",
                                }}
                            >
                                Curated by our Rittenhouse beverage experts,
                                you're certain to find something to suit your
                                mood. reopening.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            borderTop: "1px solid gray",
                        }}
                    >
                        <Button style={{ fontSize: "20px" }}>More Info</Button>
                    </CardActions>
                </Card>
                <Card
                    className={classes.root}
                    style={{
                        marginBottom: "55px",
                    }}
                >
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://cdn11.bigcommerce.com/s-7c08qbh/product_images/uploaded_images/ardmore-web.jpg?t=1617972439"
                        />
                        <CardContent
                            style={{ background: "#222222", padding: "30px 0" }}
                        >
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "20px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily:
                                        "Montserrat Arial Helvetica sans-serif",
                                }}
                            >
                                ARDMORE FARMERS MARKET
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "16px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily: "Assistant",
                                }}
                            >
                                120 Coulter Avenue — Ardmore, PA 19003
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "26px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "#e8af55",
                                    fontFamily: "proxima-nova Helvetica Arial",
                                }}
                            >
                                484.416.3311
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                style={{
                                    fontSize: "16px",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontFamily: "Assistant",
                                }}
                            >
                                Mon. - Sat.
                                <br /> 8:00am - 6:00pm <br />
                                Sun. 8:00am - 4:00pm
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                style={{
                                    fontSize: "20px",
                                    letterSpacing: 0,
                                    lineHeight: "24px",
                                    textAlign: "center",
                                    color: "#222",
                                    fontFamily:
                                        "proxima-nova Helvetica Arial sans-serif",
                                }}
                            >
                                Located in the heart of the Main Line, our
                                location is nestled in beautiful Suburban
                                Square.Located in the heart of the Main Line,
                                our location is nestled in beautiful Suburban
                                Square.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            borderTop: "1px solid gray",
                        }}
                    >
                        <Button style={{ fontSize: "20px" }}>More Info</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default Locations;
