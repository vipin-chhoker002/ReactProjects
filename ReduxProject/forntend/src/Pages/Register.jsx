import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { asynceregisteruser } from '../store/action/Useraction';
import { useDispatch } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate()
  const submitHandler = (data) => {
    const finalData = { ...data, id: nanoid(), isAdmin: false, cart: [] };
   
    dispatch(asynceregisteruser(finalData));
    navigate("/Login")
    reset();
  };

  return (
    <div className="bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign up with Email
        </h2>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1">
                <input
                  {...register("username", { required: true })}
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                             placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  {...register("email", { required: true })}
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                             placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Choose Password
              </label>
              <div className="mt-1">
                <input
                  {...register("password", { required: true })}
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                             placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm 
                           text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <Link className="text-blue-600" to="/Login">Login</Link>
                <span className="px-2 bg-white text-gray-500">Or sign in with</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
