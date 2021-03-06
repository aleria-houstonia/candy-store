import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../src/contexts/AuthContext";
import { adminUID } from "./helpers/API";
const AdminPrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useAuth();
    return (
        <Route
            {...rest}
            render={(props) => {
                return currentUser && currentUser.uid === adminUID ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                );
            }}
        ></Route>
    );
};

export default AdminPrivateRoute;
