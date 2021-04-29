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
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/add" component={AddProduct} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </ProductsContextProvider>
    );
};

export default Routes;
