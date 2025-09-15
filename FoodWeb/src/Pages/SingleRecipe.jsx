import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'

import { Recipe } from '../Context/Context'

function SingleRecipe() {
    const { data, setdata } = useContext(Recipe);
    const params = useParams();
    const recipe = data.find((item) => item.id === params.id);



    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            tittle: recipe.tittle,
            chef: recipe.chef,
            disc: recipe.disc,
            intra: recipe.intra,
            ingr: recipe.ingr,
            category: recipe.category,
            image: recipe.image

        }
    });

    function submithandle(recipe) {
        let index = data.findIndex((item) => item.id === params.id)
        const copyData = [...data];
        copyData[index] = { ...copyData[index], ...recipe }
        console.log(copyData)
        setdata(copyData)
    }


    return (
        <div className='w-full flex'>
            <div className='left w-1/2 p-2'>
                <img src={recipe.image} width="200px" alt="" />;
                <h1 className='text-2xl font-bold'>{recipe.tittle}</h1>
                <p className='text-lg'>{recipe.disc}</p>
                <p className='text-lg'>Ingredients: {recipe.intra}</p>
                <p className='text-lg'>Instructions: {recipe.ingr}</p>
                <p className='text-lg'>Chef: {recipe.chef}</p>
                <p className='text-lg'>Category: {recipe.category}</p>


            </div>
            <div className="right w-1/2 p-2">

                <form className='w-full' onSubmit={handleSubmit(submithandle)}>

                    <input className='border-b w-[50%]  mb-2 outline-0' type="text"  {...register("tittle")} placeholder='Recipe tittle' />
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
                    <select className='text-black p-1  rounded bg-gray-500'   {...register("category")} name="foodCategory">
                        <option value="lunch"> lunch</option>
                        <option value="dinner">dinner</option>
                        <option value="breakfast">breakfast</option>
                    </select>


                    <button className='block m-2 bg-zinc-900 p-2 rounded animate-pulse '>Update recipe</button>

                </form>

            </div>
        </div>
    );
}

export default SingleRecipe;
