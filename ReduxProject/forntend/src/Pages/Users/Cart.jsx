import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../../store/action/Useraction";

function Cart() {
    const dispatch = useDispatch();

    const { userReducer, ProductReducer } = useSelector(
        (state) => state
    );

    const userdata = userReducer?.userdata;
    const products = ProductReducer?.Products || [];

    // ==========================================
    // CURRENT USER CART
    // ==========================================

    const cart = Array.isArray(userdata?.cart)
        ? userdata.cart
        : [];

    // ==========================================
    // FIND PRODUCT
    // ==========================================

    const getProduct = (productId) => {
        return products.find(
            (product) =>
                String(product.id) === String(productId)
        );
    };

    // ==========================================
    // UPDATE CART
    // ==========================================

    const updateCart = (updatedCart) => {
        if (!userdata) return;

        const updatedUser = {
            ...userdata,
            cart: updatedCart,
        };

        dispatch(
            asyncUpdateUser(
                userdata.id,
                updatedUser
            )
        );
    };

    // ==========================================
    // INCREASE QUANTITY
    // ==========================================

    const increaseQuantity = (productId) => {
        const updatedCart = cart.map((item) => {
            if (
                String(item.productId) ===
                String(productId)
            ) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }

            return item;
        });

        updateCart(updatedCart);
    };

    // ==========================================
    // DECREASE QUANTITY
    // ==========================================

    const decreaseQuantity = (productId) => {
        const updatedCart = cart
            .map((item) => {
                if (
                    String(item.productId) ===
                    String(productId)
                ) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                }

                return item;
            })
            .filter(
                (item) => item.quantity > 0
            );

        updateCart(updatedCart);
    };

    // ==========================================
    // REMOVE ITEM
    // ==========================================

    const removeItem = (productId) => {
        const updatedCart = cart.filter(
            (item) =>
                String(item.productId) !==
                String(productId)
        );

        updateCart(updatedCart);
    };

    // ==========================================
    // TOTAL ITEMS
    // ==========================================

    const totalItems = cart.reduce(
        (total, item) =>
            total + Number(item.quantity || 0),
        0
    );

    // ==========================================
    // VALID CART ITEMS
    // ==========================================

    const cartProducts = cart
        .map((item) => {
            const product = getProduct(
                item.productId
            );

            if (!product) return null;

            return {
                ...item,
                product,
            };
        })
        .filter(Boolean);

    // ==========================================
    // LOADING
    // ==========================================

    if (!userdata) {
        return (
            <section className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
                <div className="text-center">
                    <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-indigo-500" />

                    <p className="text-sm text-slate-400">
                        Loading cart...
                    </p>
                </div>
            </section>
        );
    }

    // ==========================================
    // EMPTY CART
    // ==========================================

    if (cartProducts.length === 0) {
        return (
            <section className="min-h-screen bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center">

                    <div className="w-full rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center shadow-2xl sm:p-12">

                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500/10 text-4xl">
                            🛒
                        </div>

                        <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                            Your cart is empty
                        </h1>

                        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400">
                            You haven't added any products to
                            your cart yet. Explore our collection
                            and add something you like.
                        </p>

                        <Link
                            to="/products"
                            className="mt-7 inline-flex items-center rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600 active:scale-95"
                        >
                            Explore Products
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    // ==========================================
    // CART UI
    // ==========================================

    return (
        <section className="min-h-screen bg-slate-950 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
            <div className="mx-auto max-w-7xl">

                {/* =====================================
                    HEADER
                ====================================== */}

                <div className="mb-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
                        Shopping Cart
                    </p>

                    <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Your Cart
                            </h1>

                            <p className="mt-2 text-sm text-slate-400 sm:text-base">
                                Review your selected products before
                                continuing.
                            </p>
                        </div>

                        <div className="w-fit rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
                            {totalItems}{" "}
                            {totalItems === 1
                                ? "Item"
                                : "Items"}
                        </div>
                    </div>
                </div>

                {/* =====================================
                    MAIN GRID
                ====================================== */}

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">

                    {/* =================================
                        CART ITEMS
                    ================================== */}

                    <div className="space-y-4">

                        {cartProducts.map(
                            ({
                                product,
                                quantity,
                            }) => (
                                <article
                                    key={product.id}
                                    className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-lg"
                                >
                                    <div className="flex flex-col gap-5 p-4 sm:flex-row sm:p-5">

                                        {/* IMAGE */}

                                        <Link
                                            to={`/product/${product.id}`}
                                            className="h-52 w-full shrink-0 overflow-hidden rounded-xl bg-slate-800 sm:h-36 sm:w-44"
                                        >
                                            <img
                                                src={product.Image}
                                                alt={product.tittle}
                                                className="h-full w-full object-cover transition duration-300 hover:scale-105"
                                            />
                                        </Link>

                                        {/* DETAILS */}

                                        <div className="flex min-w-0 flex-1 flex-col">

                                            <div className="flex items-start justify-between gap-4">

                                                <div className="min-w-0">

                                                    <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium capitalize text-indigo-400">
                                                        {
                                                            product.category
                                                        }
                                                    </span>

                                                    <h2 className="mt-2 truncate text-lg font-semibold capitalize text-white">
                                                        {
                                                            product.tittle
                                                        }
                                                    </h2>

                                                    <p className="mt-1 line-clamp-2 text-sm leading-5 text-slate-400">
                                                        {
                                                            product.disc
                                                        }
                                                    </p>
                                                </div>

                                                {/* REMOVE */}

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removeItem(
                                                            product.id
                                                        )
                                                    }
                                                    className="shrink-0 rounded-lg p-2 text-slate-500 transition hover:bg-red-500/10 hover:text-red-400"
                                                    title="Remove item"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        className="h-5 w-5"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M6 7h12M9 7V4h6v3m-7 0 1 13h6l1-13M10 11v5m4-5v5"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>

                                            {/* BOTTOM */}

                                            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-5">

                                                {/* QUANTITY */}

                                                <div className="flex items-center overflow-hidden rounded-lg border border-slate-700 bg-slate-950">

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            decreaseQuantity(
                                                                product.id
                                                            )
                                                        }
                                                        className="flex h-9 w-9 items-center justify-center text-lg font-bold text-slate-300 transition hover:bg-slate-800 hover:text-white"
                                                    >
                                                        −
                                                    </button>

                                                    <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-700 px-2 text-sm font-semibold text-white">
                                                        {
                                                            quantity
                                                        }
                                                    </span>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            increaseQuantity(
                                                                product.id
                                                            )
                                                        }
                                                        className="flex h-9 w-9 items-center justify-center text-lg font-bold text-slate-300 transition hover:bg-slate-800 hover:text-white"
                                                    >
                                                        +
                                                    </button>

                                                </div>

                                                {/* PRODUCT ID */}

                                                <span className="text-xs text-slate-600">
                                                    ID:{" "}
                                                    {
                                                        product.id
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            )
                        )}
                    </div>

                    {/* =================================
                        ORDER SUMMARY
                    ================================== */}

                    <aside className="h-fit lg:sticky lg:top-6">

                        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl sm:p-6">

                            <h2 className="text-xl font-semibold text-white">
                                Cart Summary
                            </h2>

                            <div className="mt-6 space-y-4">

                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-400">
                                        Products
                                    </span>

                                    <span className="font-medium text-slate-200">
                                        {
                                            cartProducts.length
                                        }
                                    </span>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-400">
                                        Total Items
                                    </span>

                                    <span className="font-medium text-slate-200">
                                        {
                                            totalItems
                                        }
                                    </span>
                                </div>

                                <div className="border-t border-slate-800 pt-4">
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium text-slate-300">
                                            Total Quantity
                                        </span>

                                        <span className="text-xl font-bold text-white">
                                            {
                                                totalItems
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* CHECKOUT */}

                            <button
                                type="button"
                                className="mt-6 w-full rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600 active:scale-[0.98]"
                            >
                                Proceed to Checkout
                            </button>

                            {/* CONTINUE SHOPPING */}

                            <Link
                                to="/products"
                                className="mt-3 block w-full rounded-xl border border-slate-700 px-4 py-3 text-center text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:bg-slate-800 hover:text-white"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default Cart;