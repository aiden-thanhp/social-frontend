import React from "react";
import { Route, Navigate } from 'react-router-dom';
import Cookies from "universal-cookie";

const ProtectedRoutes = ({ component: Component, ...rest }) => {
    const cookies = new Cookies();
    
    return (
        <Route
            {...rest}
            render={(props) => {
                const token = cookies.get("TOKEN");

                if (token) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Navigate replace to="/login" />
                    )
                }
            }}
        >

        </Route>
    )
}