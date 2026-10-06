import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const user = useSelector(
        (state) => state.userReducer.userdata
    );

    const name = user?.username;
    const firstLetter = name?.[0];

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        ...(user
            ? []
            : [
                {
                    name: "Home",
                    path: "/",
                },
            ]),
        {
            name: "Products",
            path: "/Products",
        },
    ];

    return (
        <>
            <nav className="fixed inset-x-0 top-0 z-50">
                <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">

                    {/* Navbar */}
                    <div className="relative flex h-[68px] items-center justify-between rounded-2xl border border-white/10 bg-slate-900/90 px-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">

                        {/* Logo */}
                        <NavLink
                            to="/"
                            onClick={closeMenu}
                            className="group flex items-center gap-3"
                        >
                            <div className="relative">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 shadow-lg shadow-purple-500/30 transition duration-300 group-hover:scale-105">
                                    <span className="text-xl font-black text-white">
                                        L
                                    </span>
                                </div>

                                <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-slate-900 bg-emerald-400" />
                            </div>

                            <div className="hidden sm:block">
                                <h1 className="text-lg font-bold leading-none text-white">
                                    Logo
                                </h1>

                                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                                    Store
                                </p>
                            </div>
                        </NavLink>


                        {/* Desktop Navigation */}
                        <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
                            <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] p-1">

                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        end={item.path === "/"}
                                        className={({ isActive }) =>
                                            `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${isActive
                                                ? "bg-white text-slate-900 shadow-md"
                                                : "text-slate-300 hover:bg-white/10 hover:text-white"
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}

                                {/* Create Product */}
                                {user?.isAdmin && (
                                    <NavLink
                                        to="/admin/create-products"
                                        className={({ isActive }) =>
                                            `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${isActive
                                                ? "bg-white text-slate-900 shadow-md"
                                                : "text-slate-300 hover:bg-white/10 hover:text-white"
                                            }`
                                        }
                                    >
                                        Create Product
                                    </NavLink>
                                )}
                                <NavLink
                                    to="/user-cart"
                                    className={({ isActive }) =>
                                        `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${isActive
                                            ? "bg-white text-slate-900 shadow-md"
                                            : "text-slate-300 hover:bg-white/10 hover:text-white"
                                        }`
                                    }
                                >
                                    Cart
                                </NavLink>

                                {/* Setting */}
                                <NavLink
                                    to="/admin/user-profile"
                                    className={({ isActive }) =>
                                        `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${isActive
                                            ? "bg-white text-slate-900 shadow-md"
                                            : "text-slate-300 hover:bg-white/10 hover:text-white"
                                        }`
                                    }
                                >
                                    Setting
                                </NavLink>



                            </div>
                        </div>


                        {/* Desktop User */}
                        <div className="hidden items-center gap-3 md:flex">

                            {user ? (
                                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">

                                    <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white">

                                        {user.profilePicture ? (
                                            <img
                                                src={user.profilePicture}
                                                alt={name || "Profile"}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            firstLetter
                                        )}

                                    </div>

                                    <div className="hidden lg:block">
                                        <p className="text-xs font-medium text-white">
                                            {name}
                                        </p>

                                        <p className="text-[10px] text-slate-400">
                                            Account
                                        </p>
                                    </div>

                                </div>
                            ) : (
                                <NavLink
                                    to="/Login"
                                    className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
                                >
                                    Login
                                </NavLink>
                            )}

                        </div>


                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() =>
                                setIsMenuOpen(!isMenuOpen)
                            }
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden"
                        >
                            <div className="space-y-1.5">

                                <span
                                    className={`block h-0.5 w-5 bg-white transition ${isMenuOpen
                                        ? "translate-y-2 rotate-45"
                                        : ""
                                        }`}
                                />

                                <span
                                    className={`block h-0.5 w-5 bg-white transition ${isMenuOpen
                                        ? "opacity-0"
                                        : ""
                                        }`}
                                />

                                <span
                                    className={`block h-0.5 w-5 bg-white transition ${isMenuOpen
                                        ? "-translate-y-2 -rotate-45"
                                        : ""
                                        }`}
                                />

                            </div>
                        </button>

                    </div>


                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="absolute left-4 right-4 top-[88px] z-50 md:hidden">

                            <div className="rounded-2xl border border-white/10 bg-slate-900/95 p-3 shadow-2xl backdrop-blur-xl">

                                {/* Home / Products */}
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        end={item.path === "/"}
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `mb-1 block rounded-xl px-4 py-3 text-sm font-medium ${isActive
                                                ? "bg-white text-slate-900"
                                                : "text-slate-300 hover:bg-white/10 hover:text-white"
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}


                                {user ? (
                                    <>
                                        {/* Create Product */}
                                        {user.isAdmin && (
                                            <NavLink
                                                to="/admin/create-products"
                                                onClick={closeMenu}
                                                className={({ isActive }) =>
                                                    `mb-1 block rounded-xl px-4 py-3 text-sm font-medium ${isActive
                                                        ? "bg-white text-slate-900"
                                                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                                                    }`
                                                }
                                            >
                                                Create Product
                                            </NavLink>
                                        )}


                                        {/* Setting */}
                                        <NavLink
                                            to="/admin/user-profile"
                                            onClick={closeMenu}
                                            className={({ isActive }) =>
                                                `mb-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${isActive
                                                    ? "bg-white text-slate-900"
                                                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                                                }`
                                            }
                                        >

                                            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white">

                                                {user.profilePicture ? (
                                                    <img
                                                        src={user.profilePicture}
                                                        alt={name || "Profile"}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    firstLetter
                                                )}

                                            </div>

                                            <div>
                                                <p className="text-sm font-medium">
                                                    Setting
                                                </p>

                                                <p className="text-xs text-slate-400">
                                                    {name}
                                                </p>
                                            </div>

                                        </NavLink>


                                        {/* Logout */}
                                        <NavLink
                                            to="/Logout"
                                            onClick={closeMenu}
                                            className="mt-2 block rounded-xl border border-red-400/20 px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10"
                                        >
                                            Logout
                                        </NavLink>
                                    </>
                                ) : (
                                    <NavLink
                                        to="/Login"
                                        onClick={closeMenu}
                                        className="mt-2 block rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900"
                                    >
                                        Login
                                    </NavLink>
                                )}

                            </div>
                        </div>
                    )}

                </div>
            </nav>

            {/* Navbar spacing */}
            <div className="h-[92px]" />
        </>
    );
}

export default Navbar;