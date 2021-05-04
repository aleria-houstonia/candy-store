import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../contexts/ProductsContext";
import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Products.css";
import { Menu, MenuItem, Button } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
const ProductsList = ({ history }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const classes = useStyles();
    const { productData, getProducts, paginationPages } = useContext(
        productContext
    );
    const [page, setPage] = useState(getPage());

    function getPage() {
        const search = new URLSearchParams(history.location.search);
        return search.get("_page");
    }
    const handlePage = (e, page) => {
        const search = new URLSearchParams(history.location.search);
        search.set("_page", page);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getProducts(history);
    };
    console.log(paginationPages);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [title, setTitle] = useState("Featured items");
    function handleMin(e) {
        setMin(e.target.value);
    }
    function handleMax(e) {
        setMax(e.target.value);
    }
    useEffect(() => {
        getProducts(history);
    }, []);
    const handleChange = (e) => {
        if (min == "0" && max == "0") {
            history.push(`${history.location.pathname.replace("price")}`);
            getProducts(history);
            return;
        }
        // const search = new URLSearchnpParams(history.location.search);
        history.push(
            `${history.location.pathname}?price_gte=${min}&price_lte=${max}`
        );
        getProducts(history);
    };
    const handleSortAsc = (e) => {
        if (title == "All") {
            history.push(`${history.location.pathname.replace("price")}`);
            getProducts(history);
            return;
        }

        history.push(`${history.location.pathname}?_sort=price&_order=asc`);
        getProducts(history);
        setTitle(" PRICE: ASCENDING");
        // handleClose();
    };
    const handleSortDes = (e) => {
        if (title == "All") {
            history.push(`${history.location.pathname.replace("price")}`);
            getProducts(history);
            return;
        }

        history.push(`${history.location.pathname}?_sort=price&_order=desc`);
        getProducts(history);
        setTitle(" PRICE: DESCENDING");
        // handleClose();
    };
    const handleSortAtoZ = (e) => {
        if (title == "All") {
            history.push(`${history.location.pathname.replace("price")}`);
            getProducts(history);
            return;
        }

        history.push(
            `${history.location.pathname}?_sort=title&_order=alphaasc`
        );
        getProducts(history);
        setTitle(" A to Z");
        // handleClose();
    };
    const handleSortZtoA = (e) => {
        if (title == "All") {
            history.push(`${history.location.pathname.replace("price")}`);
            getProducts(history);
            return;
        }

        history.push(
            `${history.location.pathname}?_sort=title&_order=alphades`
        );
        getProducts(history);
        setTitle("Z to A");
        // handleClose();
    };
    // /posts?_sort=views&_order=asc
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Accordion style={{ width: "60%" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography
                            style={{ fontSize: "14px" }}
                            className={classes.heading}
                        >
                            Sort By
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Button
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            {title}
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {/* <MenuItem onClick={handleClose}>
                                Newest items
                            </MenuItem> */}
                            <MenuItem onClick={handleSortAtoZ}>A to Z</MenuItem>
                            <MenuItem onClick={handleSortZtoA}>Z to A</MenuItem>
                            <MenuItem onClick={handleSortAsc}>
                                PRICE: ASCENDING
                            </MenuItem>
                            <MenuItem onClick={handleSortDes}>
                                PRICE:DESCENDING
                            </MenuItem>
                            <MenuItem onClick={handleClose}>All</MenuItem>
                        </Menu>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Accordion style={{ width: "60%" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography
                            style={{ fontSize: "14px" }}
                            className={classes.heading}
                        >
                            Filter By
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography
                                    variant="h5"
                                    className={classes.heading}
                                >
                                    Price
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <input
                                    onChange={handleMin}
                                    value={min}
                                    style={{ textAlign: "center" }}
                                    type="number"
                                    placeholder="min"
                                />
                                <input
                                    onChange={handleMax}
                                    value={max}
                                    style={{ textAlign: "center" }}
                                    type="number"
                                    placeholder="max"
                                />
                                <button
                                    className="btn-update"
                                    onClick={handleChange}
                                >
                                    Update
                                </button>
                            </AccordionDetails>
                        </Accordion>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className="productList">
                {productData.map((item) => (
                    <ProductCard key={item.id} item={item} history={history} />
                ))}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: " 30px 0",
                }}
            >
                <Pagination
                    onChange={handlePage}
                    count={paginationPages}
                    color="secondary"
                    defaultPage={+page}
                />
            </div>
        </div>
    );
};

export default ProductsList;
