import { nanoid } from 'nanoid'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Recipe } from '../Context/Context';
import { UNSAFE_getPatchRoutesOnNavigationFunction, useNavigate } from 'react-router-dom';

function Create() {
  const { register, handleSubmit, reset } = useForm()
  const { data, setdata } = useContext(Recipe);
  const navigate = useNavigate();
  function submithandle(recipedata) {
    recipedata.id = nanoid();
    const copyData = [...data]
    copyData.push(recipedata)
    setdata(copyData)
    localStorage.setItem("recipe", JSON.stringify(copyData))
    navigate("/recipes");
    reset();
  }
  return (
    <>
      <div className='w-full flex border justify-center   p-5'>

        <form className='w-full' onSubmit={handleSubmit(submithandle)}>

          <input className='border-b w-[50%]  mb-2 outline-0' type="text" {...register("tittle")} placeholder='Recipe tittle' />
          <br />
          <input className='border-b w-[50%]  mb-2 outline-0' type="text" {...register("chef")} placeholder='chef name' />
          <br />
          <small className='text-red-500'>this is how the error show</small>
          <br />
          <input className='border-b w-[50%] mb-2 outline-0' type='url'  {...register("image")} placeholder='img url' />
          <br />
          <small className='text-red-500'>this is how the error show</small>

          <br />
          <textarea className='w-[50%] border' placeholder='write discription' name=""{...register("disc")} id=""></textarea>
          <br />
          <textarea className='w-[50%] border' placeholder='write ingredients' name=""{...register("ingr")} id=""></textarea>
          <br />
          <textarea className='w-[50%] border' placeholder='write intractions' name=""{...register("intra")} id=""></textarea>
          <br />
          <select className='text-black p-1  rounded bg-gray-500'  {...register("category")} name="foodCategory">
            <option value="starters">Starters / Appetizers</option>
            <option value="main-course">Main Course</option>
            <option value="desserts">Desserts</option>
            <option value="beverages">Beverages / Drinks</option>
            <option value="snacks">Snacks / Fast Food</option>
            <option value="salads">Salads</option>
            <option value="soups">Soups</option>
            <option value="seafood">Seafood</option>
            <option value="vegetarian">Vegetarian Dishes</option>
            <option value="non-vegetarian">Non-Vegetarian Dishes</option>
          </select>


          <button className='block m-2 bg-zinc-900 p-2 rounded animate-pulse '>Save Recipe</button>

        </form>

      </div>


    </>
  )
}

export default Create