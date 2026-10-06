import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
    asyncDeleteUser,
    asynclogoutuser,
    asyncUpdateUser,
} from "../../store/action/Useraction";

function UserProfile() {
    const [showPassword, setShowPassword] = useState(false);
    const userdata = useSelector(
        (state) => state.userReducer.userdata
    );

    const dispatch = useDispatch();

    const {
        register,
        reset,
        handleSubmit,
    } = useForm();

    // Profile picture state
    const [profilePicture, setProfilePicture] = useState(
        userdata?.profilePicture || null
    );

    // File input reference
    const fileInputRef = useRef(null);

    // Existing user data logic
    useEffect(() => {
        if (userdata) {
            reset({
                id: userdata?.id,
                username: userdata?.username,
                email: userdata?.email,
                password: userdata?.password,
            });

            // Load saved profile picture
            setProfilePicture(userdata?.profilePicture || null);
        }
    }, [userdata, reset]);

    // Existing update user logic
    const updateUserHandler = (user) => {
        dispatch(asyncUpdateUser(userdata.id, user));
    };

    // Add / Update profile picture
    const profilePictureHandler = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        // Check image type
        if (!file.type.startsWith("image/")) {
            alert("Please select an image file.");
            return;
        }

        // Maximum 2MB
        if (file.size > 2 * 1024 * 1024) {
            alert("Please select an image smaller than 2MB.");
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            const imageData = reader.result;

            // Show image immediately
            setProfilePicture(imageData);

            // Save image in user object
            dispatch(
                asyncUpdateUser(userdata.id, {
                    profilePicture: imageData,
                })
            );
        };

        reader.readAsDataURL(file);
    };

    // Remove profile picture
    const removeProfilePicture = () => {
        setProfilePicture(null);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }

        // Remove image from user object
        dispatch(
            asyncUpdateUser(userdata.id, {
                profilePicture: null,
            })
        );
    };

    // Open file selector
    const chooseProfilePicture = () => {
        fileInputRef.current?.click();
    };

    // Existing delete logic
    const deleteHandler = () => {
        dispatch(asyncDeleteUser(userdata.id));
    };

    // Existing logout logic
    const Logouthandler = () => {
        dispatch(asynclogoutuser());
    };

    if (!userdata) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white px-8 py-6 rounded-xl shadow">
                    <p className="text-gray-600 text-lg">
                        User not found
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">

            {/* Main Container */}
            <div className="max-w-5xl mx-auto">

                {/* Profile Header */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">

                    {/* Cover */}
                    <div className="h-36 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

                    {/* Profile Info */}
                    <div className="px-6 pb-6">

                        <div className="flex flex-col sm:flex-row sm:items-end gap-5 -mt-12">

                            {/* Avatar + Profile Picture */}
                            <div className="flex flex-col items-center">

                                {/* Avatar */}
                                <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">

                                        {profilePicture ? (
                                            <img
                                                src={profilePicture}
                                                alt="Profile"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-4xl font-bold text-white uppercase">
                                                {userdata.username?.charAt(0)}
                                            </span>
                                        )}

                                    </div>
                                </div>

                                {/* Profile Picture Buttons */}
                                <div className="flex gap-2 mt-3">

                                    <button
                                        type="button"
                                        onClick={chooseProfilePicture}
                                        className="px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                                    >
                                        {profilePicture
                                            ? "Update Picture"
                                            : "Add Picture"}
                                    </button>

                                    {profilePicture && (
                                        <button
                                            type="button"
                                            onClick={removeProfilePicture}
                                            className="px-3 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition"
                                        >
                                            Remove
                                        </button>
                                    )}

                                    {/* Hidden File Input */}
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={profilePictureHandler}
                                        className="hidden"
                                    />

                                </div>
                            </div>

                            {/* Name */}
                            <div className="pb-1">
                                <h1 className="text-2xl font-bold text-gray-900">
                                    {userdata.username}
                                </h1>

                                <p className="text-gray-500">
                                    {userdata.email}
                                </p>
                            </div>

                            {/* Admin Badge */}
                            <div className="sm:ml-auto pb-2">
                                {userdata.isAdmin ? (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700">
                                        Admin
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                                        User
                                    </span>
                                )}
                            </div>

                        </div>
                    </div>
                </div>

                {/* User Details */}
                <div className="mt-6 bg-white rounded-2xl shadow-md p-6">

                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-900">
                            User Details
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Your account information
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* Username */}
                        <div className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition">
                            <p className="text-sm text-gray-500">
                                Username
                            </p>

                            <p className="mt-1 text-lg font-semibold text-gray-900">
                                {userdata.username}
                            </p>
                        </div>

                        {/* Email */}
                        <div className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition">
                            <p className="text-sm text-gray-500">
                                Email Address
                            </p>

                            <p className="mt-1 text-lg font-semibold text-gray-900 break-all">
                                {userdata.email}
                            </p>
                        </div>

                        {/* User ID */}
                        <div className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition">
                            <p className="text-sm text-gray-500">
                                User ID
                            </p>

                            <p className="mt-1 text-sm font-mono font-semibold text-gray-900 break-all">
                                {userdata.id}
                            </p>
                        </div>

                        {/* Account Type */}
                        <div className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition">
                            <p className="text-sm text-gray-500">
                                Account Type
                            </p>

                            <p className="mt-1 text-lg font-semibold text-gray-900">
                                {userdata.isAdmin
                                    ? "Administrator"
                                    : "Regular User"}
                            </p>
                        </div>

                        {/* Password */}
                        <div className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition md:col-span-2">
                            <p className="text-sm text-gray-500">
                                Password
                            </p>

                            <p className="mt-1 text-lg font-semibold tracking-widest text-gray-700">
                                ••••••••
                            </p>

                            <p className="text-xs text-gray-400 mt-1">
                                Password is hidden for security.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Update Section */}
                <div className="mt-6 bg-white rounded-2xl shadow-md p-6">

                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-900">
                            Update Details
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Update your account information
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit(updateUserHandler)}
                        className="space-y-5"
                    >

                        {/* Username */}
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Username
                            </label>

                            <input
                                {...register("username")}
                                id="username"
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email
                            </label>

                            <input
                                {...register("email")}
                                id="email"
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Password
                            </label>

                            <div className="relative">

                                <input
                                    {...register("password")}
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? "🙈" : "👁️"}
                                </button>

                            </div>
                        </div>

                        {/* Update Button */}
                        <button
                            type="submit"
                            className="w-full py-3 px-4 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
                        >
                            Update Details
                        </button>

                    </form>
                </div>

                {/* Account Actions */}
                <div className="mt-6 bg-white rounded-2xl shadow-md p-6">

                    <h2 className="text-xl font-bold text-gray-900 mb-5">
                        Account Actions
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Logout */}
                        <button
                            onClick={Logouthandler}
                            type="button"
                            className="py-3 px-4 rounded-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 transition"
                        >
                            Logout
                        </button>

                        {/* Delete */}
                        <button
                            onClick={deleteHandler}
                            type="button"
                            className="py-3 px-4 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition"
                        >
                            Delete Account
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default UserProfile;