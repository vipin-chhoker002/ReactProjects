import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import { asyncUpdateUser } from "./../store/action/Useraction";

const PRODUCTS_PER_LOAD = 6;

function Products() {
    const dispatch = useDispatch();

    const userdata = useSelector(
        (state) => state.userReducer.userdata
    );

    const data = useSelector(
        (state) => state.ProductReducer.Products
    );

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [visibleCount, setVisibleCount] = useState(
        PRODUCTS_PER_LOAD
    );

    const handleAddToCart = (productId) => {
        if (!userdata) return;

        const currentCart = Array.isArray(userdata.cart)
            ? userdata.cart
            : [];

        const updatedCart = currentCart.map((item) => ({
            ...item,
        }));

        const cartIndex = updatedCart.findIndex(
            (item) =>
                String(item.productId) === String(productId)
        );

        if (cartIndex === -1) {
            updatedCart.push({
                productId,
                quantity: 1,
            });
        } else {
            updatedCart[cartIndex] = {
                ...updatedCart[cartIndex],
                quantity:
                    Number(updatedCart[cartIndex].quantity || 0) + 1,
            };
        }

        dispatch(
            asyncUpdateUser(userdata.id, {
                ...userdata,
                cart: updatedCart,
            })
        );
    };

    const handleRemoveFromCart = (productId) => {
        if (!userdata) return;

        const currentCart = Array.isArray(userdata.cart)
            ? userdata.cart
            : [];

        const updatedCart = currentCart
            .map((item) => {
                if (
                    String(item.productId) === String(productId)
                ) {
                    return {
                        ...item,
                        quantity:
                            Number(item.quantity || 0) - 1,
                    };
                }

                return item;
            })
            .filter((item) => item.quantity > 0);

        dispatch(
            asyncUpdateUser(userdata.id, {
                ...userdata,
                cart: updatedCart,
            })
        );
    };

    const getCartQuantity = (productId) => {
        if (!userdata || !Array.isArray(userdata.cart)) {
            return 0;
        }

        const cartItem = userdata.cart.find(
            (item) =>
                String(item.productId) === String(productId)
        );

        return cartItem
            ? Number(cartItem.quantity || 0)
            : 0;
    };

    const loadMoreProducts = () => {
        setVisibleCount((prev) =>
            Math.min(
                prev + PRODUCTS_PER_LOAD,
                data.length
            )
        );
    };

    if (!data) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
                Loading...
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <section className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
                <div className="w-full max-w-md rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 p-10 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-2xl">
                        📦
                    </div>

                    <h2 className="text-lg font-semibold text-white">
                        No products found
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        There are currently no products to display.
                    </p>
                </div>
            </section>
        );
    }

    const visibleProducts = data.slice(0, visibleCount);
    const hasMore = visibleCount < data.length;

    return (
        <section className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                <div className="mb-10">
                    <p className="mb-2 text-sm font-medium uppercase tracking-widest text-indigo-400">
                        Our Collection
                    </p>

                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Explore Products
                            </h1>

                            <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
                                Discover our latest collection of products.
                            </p>
                        </div>

                        <span className="w-fit rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
                            {visibleProducts.length} / {data.length}
                        </span>
                    </div>
                </div>

                <InfiniteScroll
                    dataLength={visibleProducts.length}
                    next={loadMoreProducts}
                    hasMore={hasMore}
                    loader={
                        <div className="flex items-center justify-center gap-3 py-10">
                            <div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-700 border-t-indigo-500" />

                            <span className="text-sm text-slate-500">
                                Loading more products...
                            </span>
                        </div>
                    }
                    endMessage={
                        <p className="py-10 text-center text-sm text-slate-600">
                            You have reached the end.
                        </p>
                    }
                >
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {visibleProducts.map((product) => {
                            const quantity = getCartQuantity(
                                product.id
                            );

                            return (
                                <article
                                    key={product.id}
                                    className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-indigo-500/10"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">

                                        <img
                                            src={product.Image}
                                            alt={product.tittle}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />

                                        <div className="absolute left-3 top-3">
                                            <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                                                {product.category}
                                            </span>
                                        </div>

                                        {quantity > 0 && (
                                            <div className="absolute right-3 top-3">
                                                <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-indigo-500 px-2 text-xs font-bold text-white shadow-lg">
                                                    {quantity}
                                                </span>
                                            </div>
                                        )}

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </div>

                                    <div className="p-5">

                                        <h2 className="truncate text-lg font-semibold capitalize text-white">
                                            {product.tittle}
                                        </h2>

                                        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-slate-400">
                                            {product.disc}
                                        </p>

                                        <div className="mt-5 flex gap-2">

                                            <Link
                                                to={`/product/${product.id}`}
                                                className="flex-1 rounded-lg border border-slate-700 px-3 py-2 text-center text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:bg-slate-800 hover:text-white active:scale-95"
                                            >
                                                More info
                                            </Link>

                                            {quantity === 0 ? (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleAddToCart(
                                                            product.id
                                                        )
                                                    }
                                                    className="flex-1 rounded-lg bg-indigo-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-600 active:scale-95"
                                                >
                                                    Add to Cart
                                                </button>
                                            ) : (
                                                <div className="flex flex-1 items-center justify-between overflow-hidden rounded-lg bg-indigo-500">

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleRemoveFromCart(
                                                                product.id
                                                            )
                                                        }
                                                        className="h-full px-3 text-lg font-bold text-white transition hover:bg-indigo-600"
                                                    >
                                                        −
                                                    </button>

                                                    <span className="text-sm font-semibold text-white">
                                                        {quantity}
                                                    </span>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleAddToCart(
                                                                product.id
                                                            )
                                                        }
                                                        className="h-full px-3 text-lg font-bold text-white transition hover:bg-indigo-600"
                                                    >
                                                        +
                                                    </button>

                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </article>
                            );
                        })}

                    </div>
                </InfiniteScroll>

            </div>

            {selectedProduct && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
                    onClick={() =>
                        setSelectedProduct(null)
                    }
                >
                    <div
                        className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            type="button"
                            onClick={() =>
                                setSelectedProduct(null)
                            }
                            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-xl text-white transition hover:bg-black/80"
                        >
                            ×
                        </button>

                        <div className="h-64 overflow-hidden sm:h-80">
                            <img
                                src={selectedProduct.Image}
                                alt={selectedProduct.tittle}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="p-6">

                            <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
                                {selectedProduct.category}
                            </span>

                            <h2 className="mt-4 text-2xl font-bold capitalize text-white">
                                {selectedProduct.tittle}
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-slate-400">
                                {selectedProduct.disc}
                            </p>

                            <div className="mt-5 border-t border-slate-800 pt-4">

                                <p className="text-xs text-slate-500">
                                    Product ID
                                </p>

                                <p className="mt-1 break-all text-sm text-slate-300">
                                    {selectedProduct.id}
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            )}

        </section>
    );
}

export default Products;