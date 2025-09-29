import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Recipe } from '../../Context/Context';
import { set } from 'react-hook-form';
function RecipesCard(props) {

    const { data, setdata } = useContext(Recipe)

    const { id, image, tittle, disc, intra, chef } = props.recipes;
    function deleteEvent(e) {
        let updateData = data.filter((item) => e.target.id != item.id);
        setdata([...updateData])
        localStorage.setItem("recipe", JSON.stringify(updateData))
        localStorage.setItem("fav", JSON.stringify(updateData))
    }


    return (
        <div className='flex flex-col'>

            <Link to={`/recipe/details/${id}`} className='block w-[23vw] mt-20 rounded overflow-hidden'>
                <img className='w-full h-[20vh] object-cover' src={image} alt="" />
                <h1 className='mt-2 font-black '> {tittle} gurjar</h1>
                <p>{disc}</p>
                <small className='text-red-400 '>chef: {chef}</small>
            </Link>
            <button onClick={deleteEvent} id={id} className='cursor-pointer h-fit bg-red-500 p-2 rounded'>Delete Recipe</button>


        </div>
    )
}

export default RecipesCard