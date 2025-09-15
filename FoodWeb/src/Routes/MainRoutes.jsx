import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Recipoes from '../Pages/Recipoes'
import NavBar from './components/NavBar';
import Create from './../Pages/Create';
import SingleRecipe from './../Pages/SingleRecipe';

function MainRoutes() {
    return (
        <>
            <NavBar></NavBar>

            <Routes>
                <Route path='/' element={<Home></Home>} />

                <Route path='/recipes' element={<Recipoes></Recipoes>} />



                <Route path='/about' element={<About></About>} />
                <Route path='/recipe/details/:id' element={<SingleRecipe></SingleRecipe>} />

                <Route path='/create' element={<Create></Create>} />
            </Routes>
        </>
    )
}

export default MainRoutes