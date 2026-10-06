import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Augthreper from './Augthreper';
import GuestRoute from '../Pages/GuestRoute';

// Lazy Loaded Pages
const Home = lazy(() => import('./../Pages/Home'));
const Products = lazy(() => import('../Pages/Products'));
const Login = lazy(() => import('../Pages/Login'));
const Register = lazy(() => import('../Pages/Register'));

const CreateProduct = lazy(() => import('../admin/CreateProduct'));
const ProductDetails = lazy(() => import('../admin/ProductDetails'));

const UserProfile = lazy(() => import('../Pages/Users/UserProfile'));
const Cart = lazy(() => import('../Pages/Users/Cart'));


function Mainroutes() {
    const { userdata } = useSelector(
        (state) => state.userReducer
    );

    return (
        <Suspense
            fallback={
                <div className="flex justify-center items-center min-h-screen">
                    <h2 className="text-xl font-semibold">
                        Loading...
                    </h2>
                </div>
            }
        >
            <Routes>

                <Route
                    path="/"
                    element={userdata ? <Products /> : <Home />}
                />

                <Route
                    path="/Products"
                    element={<Products />}
                />

                <Route
                    path="/Login"
                    element={
                        <GuestRoute>
                            <Login />
                        </GuestRoute>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <GuestRoute>
                            <Register />
                        </GuestRoute>
                    }
                />

                <Route
                    path="/product/:id"
                    element={
                        <Augthreper>
                            <ProductDetails />
                        </Augthreper>
                    }
                />

                <Route
                    path="/admin/create-products"
                    element={
                        <Augthreper>
                            <CreateProduct />
                        </Augthreper>
                    }
                />

                <Route
                    path="/admin/user-profile"
                    element={
                        <Augthreper>
                            <UserProfile />
                        </Augthreper>
                    }
                />

                <Route
                    path="/user-cart"
                    element={
                        <Augthreper>
                            <Cart />
                        </Augthreper>
                    }
                />

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>
        </Suspense>
    );
}

export default Mainroutes;