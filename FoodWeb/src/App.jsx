import { useState } from 'react'
import { Route, Router } from 'react-router-dom'

import './App.css'
import MainRoutes from './Routes/MainRoutes'

function App() {

  return (
    <div className=' text-white font-thin py-10 px-[10%] h-screen w-screen bg-gray-700'>

      <MainRoutes></MainRoutes>

    </div>
  )
}

export default App
