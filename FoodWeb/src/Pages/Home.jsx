import axios from '../Utils/axios'
import React, { cache } from 'react'

function Home() { // this is is about practice only axios nothing useed in this project 

    const getproducts = async () => {
        try {
            const { data } = await axios.get("products/")
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='text-[4em] text-gray-800'>welcome to food recipe website</div>
            <p>In this website we add a recipe page u can create a recipe or add these details what ingredentis discription etc aslo we add a favourite button and we create a sperate recipe page </p>
            {/* <button onClick={getproducts}>get data</button> */}
        </>
    )
}

export default Home