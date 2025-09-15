import React, { useContext } from 'react'
import { Recipe } from '../Context/Context'
import RecipesCard from '../Routes/components/RecipesCard';

function Recipoes() {
  const { data } = useContext(Recipe);
  console.log(data)
  const renderData = data.map((recipes) => <RecipesCard key={recipes.id} recipes={recipes} />)

  return (
    <div className='flex flex-wrap justify-center gap-5 mt-10'>
      {data.length > 0 ? renderData : "no recipes found"}
    </div>
  )
}

export default Recipoes