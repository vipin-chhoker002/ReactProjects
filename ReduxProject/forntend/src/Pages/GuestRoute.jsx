import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuestRoute = ({ children }) => {
    const { userdata } = useSelector(
        (state) => state.userReducer
    );

    return userdata ? (
        <Navigate to="/products" replace />
    ) : (
        children
    );
};

export default GuestRoute;