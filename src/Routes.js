import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
// import AuthProvider from "./contexts/AuthContext";
import ProductsContextProvider from "./contexts/ProductsContext";
import AddProduct from "./components/AddProduct/AddProduct";
import Shop from "./components/Shop/Shop";
import Locations from "./components/Locations/Locations";
import PaymentForm from "./components/Payment/Payment";
import ProductsList from "./components/Products/ProductsList";

import AllDescription from "./components/AllDescription/AllDescription";
import Signup from "./components/AuthThings/Signup";
// import { Dashboard } from "@material-ui/icons";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/AuthThings/Login";
import ForgotPassword from "./components/AuthThings/ForgotPassword";
import UpdateProfile from "./components/AuthThings/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "../src/contexts/AuthContext";
import { publicRoutes, userRoutes } from "./Routesagain";
import AdminRoutes from "./AdminRoutes";
import Events from "./components/Events/Events";

const Routes = () => {
    const { currentUser } = useAuth();

    return (
        <ProductsContextProvider>
            <BrowserRouter>
                <Header />
                <PrivateRoute
                    path="/update-profile"
                    component={UpdateProfile}
                />
                <PrivateRoute exact path="/dash" component={Dashboard} />
                <PrivateRoute path="/cart" component={Cart} />
                <PrivateRoute path="/payment" component={PaymentForm} />
                {/* <PrivateRoute path="/order" component={OrderSummary} /> */}
                <AdminRoutes path="/add" component={AddProduct} />
                <Route exact path="/location" component={Locations} />
                <Route exact path="/products" component={ProductsList} />
                <Route exact path="/all/:id" component={AllDescription} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/" component={Home} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/shop" component={Shop} />
                {/* <Route exact path="/dash" component={Dashboard} /> */}
                <PrivateRoute
                    path="/update-profile"
                    component={UpdateProfile}
                />
                <Route exact path="/events" component={Events} />

                {/* <Footer />  */}
            </BrowserRouter>
        </ProductsContextProvider>
    );
};

export default Routes;

{
    /* <Switch>
<PrivateRoute
    exact
    path="/dash"
    component={Dashboard}
/>
<PrivateRoute path="" />
<Route exact path="/" component={Home} />

<Route exact path="/cart" component={Cart} />
<Route exact path="/payment" component={PaymentForm} />
<Route exact path="/order" component={OrderSummary} />


<Route exact path="/add" component={AddProduct} />
</Switch> */
}

// {currentUser ? (
//     <Switch>
//         {userRoutes.map(({ path, Component }) => (
//             <Route
//                 key={path}
//                 path={path}
//                 component={Component}
//                 exact={true}
//             >
//                 {console.log("user")}
//             </Route>
//         ))}
//         <Redirect to="/"></Redirect>
//     </Switch>
// ) : (
//     <Switch>
//         {publicRoutes.map(({ path, Component }) => (
//             <Route
//                 key={path}
//                 path={path}
//                 component={Component}
//                 exact={true}
//             >
//                 {console.log("to signup")}
//             </Route>
//         ))}
//         <Redirect to="/signup"></Redirect>
//     </Switch>
// )}
