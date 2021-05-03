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
import ShareIcon from "@material-ui/icons/Share";
import { Link } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Products.css";
import { productContext } from "../../contexts/ProductsContext";
const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
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
    const classes = useStyles();

    const { deleteCard, addProductToCart } = useContext(productContext);

    return (
        <Card className={classes.root} id="productCard">
            <CardMedia
                className={classes.media}
                id="card-products"
                image={props.item.image}
                x
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
                    paddingTop: "20px",
                    fontWeight: 600,
                }}
            >
                {props.item.title}
            </Typography>
            <CardContent>
                <Typography
                    style={{
                        fontSize: "19px",
                        paddingTop: "10px",
                        textAlign: "center",
                        color: "#333",
                        fontFamily: "DIN1451Com-Engschrift sans-serif",
                        marginBottom: "30px",
                    }}
                >
                    {" "}
                    {props.item.price} $
                </Typography>
                <Typography
                    style={{
                        fontSize: "14px",
                        textAlign: "center",
                        color: "#333",
                        fontFamily: "DIN1451Com-Engschrift sans-serif",
                    }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                >
                    <Truncate
                        style={{
                            fontSize: "16px",
                            padding: "20px 0",
                            fontFamily:
                                " proxima-nova Helvetica Arial Helvetica sans-serif",
                        }}
                        lines={2}
                        ellipsis={
                            <span>
                                ... \
                                <br />
                                <Link to="/details">
                                    <button
                                        style={{
                                            marginTop: "40px",
                                            border: "2px solid #a85425",
                                            color: "#a85425",
                                            width: "100%",
                                            fontSize: "16px",
                                            padding: "20px 0",
                                            textTransform: "uppercase",
                                            fontWeight: "700",
                                            borderRadius: "0",
                                            fontFamily:
                                                " proxima-nova Helvetica Arial Helvetica sans-serif",
                                        }}
                                    >
                                        {" "}
                                        CHOOSE OPTIONS{" "}
                                    </button>
                                </Link>
                            </span>
                        }
                    >
                        {props.item.description}
                    </Truncate>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton>
                    <DeleteIcon
                        onClick={(e) => {
                            deleteCard(props.item.id);
                        }}
                    />
                </IconButton>
                 <IconButton onClick={()=>{ addProductToCart(props.item)}}> 
                    <ShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
