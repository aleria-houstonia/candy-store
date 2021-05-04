import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Truncate from "react-truncate";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Products.css";
import { productContext } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useAuth } from "../../contexts/AuthContext";
import { adminUID } from "../../helpers/API";
const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
        marginBottom: "15px",
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const ProductCard = (props) => {
    const { currentUser } = useAuth();
    const [value, setValue] = React.useState(Math.floor(Math.random() * 6));
    const { deleteCard, getProducts, addProductToCart } = useContext(
        productContext
    );
    useEffect(() => {
        getProducts(props.history);
    }, []);
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root} id="productCard">
                <CardMedia
                    className={classes.media}
                    id="card-products"
                    image={props.item.image}
                    title="Paella dish"
                />
                <Typography
                    style={{
                        fontSize: "20px",
                        textAlign: "center",
                        color: "#333",
                        textTransform: "uppercase",
                        lineHeight: "1.2",
                        fontFamily: "DIN1451Com-Engschrift sans-serif",
                        minHeight: "30px",
                        height: "60px",
                        fontWeight: 600,
                    }}
                >
                    {props.item.title}
                </Typography>
                <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    style={{ textAlign: "center", marginTop: "5px" }}
                >
                    <Rating
                        size="large"
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Box>
                <CardContent>
                    <Typography
                        style={{
                            fontSize: "19px",
                            textAlign: "center",
                            color: "#333",
                            fontFamily: "DIN1451Com-Engschrift sans-serif",
                            height: "30px",
                        }}
                    >
                        {" "}
                        ${props.item.price}
                    </Typography>
                    <Typography
                        style={{
                            fontSize: "17px",
                            textAlign: "center",
                            color: "#333",
                            fontFamily: "DIN1451Com-Engschrift sans-serif",
                            height: "50px",
                        }}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        <Truncate
                            style={{
                                color: "gray",
                                fontFamily:
                                    " proxima-nova Helvetica Arial Helvetica sans-serif",
                            }}
                            lines={2}
                            ellipsis={
                                <span>
                                    ...
                                    <br />
                                </span>
                            }
                        >
                            {props.item.overview}
                        </Truncate>
                    </Typography>
                    <Link to={`all/${props.item.id}`}>
                        <button className="button-card">CHOOSE OPTIONS</button>
                    </Link>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    {currentUser && currentUser.uid === adminUID ? (
                        <IconButton>
                            <DeleteIcon
                                onClick={(e) => {
                                    deleteCard(props.item.id, props.history);
                                }}
                            />
                        </IconButton>
                    ) : null}
                    <IconButton onClick={() => addProductToCart(props.item)}>
                        <ShoppingCartIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
};

export default ProductCard;
