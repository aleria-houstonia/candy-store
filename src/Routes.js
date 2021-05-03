import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
// import SignIn from "./components/SignIn/SignIn";
// import SignUp from "./components/SignUp/SignUp";
import AuthProvider from "./contexts/AuthContext";
import ProductsContextProvider from "./contexts/ProductsContext";
import AddProduct from "./components/AddProduct/AddProduct";
import Shop from "./components/Shop/Shop";
import Locations from "./components/Locations/Locations";
import PaymentForm from "./components/Payment/Payment";
import ProductsList from "./components/Products/ProductsList";
import Events from "./components/Events/Events";

const Routes = () => {
    return (
        <ProductsContextProvider>
            <AuthProvider>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {/* <Route exact path="/login" component={SignIn} /> */}
                        {/* <Route exact path="/signup" component={SignUp} /> */}
                        <Route path="/shop" component={Shop} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/add" component={AddProduct} />
                        <Route exact path="/location" component={Locations} />
                        <Route exact path="/payment" component={PaymentForm}/>
                        <Route exact path="/events" component={Events}/>
                        
                        <Route
                            exact
                            path="/products"
                            component={ProductsList}
                        />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </ProductsContextProvider>
    );
};

export default Routes;
