import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useForm } from 'react-hook-form';
import { asyncCreateaProducts } from '../store/action/Productaction';

function CreateProduct() {
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate()
  const createProductHandler = (data) => {
    const finalData = { ...data, id: nanoid() };

    dispatch(asyncCreateaProducts(finalData));
    reset();
  };
  return (
    <div className="bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create-product
        </h2>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit(createProductHandler)} className="space-y-6">
            {/* Username */}
            <div>
              <label htmlFor="tittle" className="block text-sm font-medium text-gray-700">
                Tittle
              </label>
              <div className="mt-1">
                <input
                  {...register("tittle", { required: true })}
                  id="tittle"
                  type="text"
                  placeholder="tittle"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                             placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                Id
              </label>
              <div className="mt-1">
                <input
                  {...register("id", { required: true })}
                  id="id"
                  type="text"
                  placeholder="id"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                             placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="disc" className="block text-sm font-medium text-gray-700">
                Discription
              </label>
              <div className="mt-1">
                <input
                  {...register("disc", { required: true })}
                  id="disc"
                  type="text"
                  placeholder="disc..."
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                             placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Catagory
              </label>
              <div className="mt-1">
                <input
                  {...register("category", { required: true })}
                  id="category"
                  type="text"
                  placeholder="category"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                             placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <div className="mt-1">
                <input
                  {...register("Image")}
                  id="Image"
                  type="url"
                  placeholder="ImageUrl"
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
                Create product
              </button>
            </div>
          </form>

          {/* Login Link */}

        </div>
      </div>
    </div>
  )
}

export default CreateProduct