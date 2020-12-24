// Libraries
import React from "react";
import { Route, Redirect } from "react-router-dom";

// Redux
import { useSelector } from 'react-redux'


export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isLoggendIn } = useSelector(state => state.auth)
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isLoggendIn) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
};