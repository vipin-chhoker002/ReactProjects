import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Augthreper = ({ children }) => {
    const { userdata } = useSelector(
        (state) => state.userReducer
    );

    return userdata ? children : <Navigate to="/login" replace />;
};

export default Augthreper;