import React from 'react'
import { data } from 'react-router-dom';
import RecipesCard from '../Routes/components/RecipesCard';

function About() {
    const data = JSON.parse(localStorage.getItem("fav"));
    const renderData = data.map((recipes) => <RecipesCard key={recipes.id} recipes={recipes} />)

    return (
        <div className='flex flex-wrap justify-center gap-5 mt-10'>
            {data.length > 0 ? renderData : "no recipes found"}
        </div>
    )
}

export default About