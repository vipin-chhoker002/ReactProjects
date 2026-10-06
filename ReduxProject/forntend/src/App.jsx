import './App.css'
import { useEffect } from 'react'
import { asyncCurrentUser, userdata } from "./store/action/Useraction";
import { useDispatch, useSelector } from 'react-redux'
import Mainroutes from './Routes/Mainroutes';
import Navbar from './Components/Navbar';
import { asyncloadaProducts } from './store/action/Productaction';
// import { cartdata } from './store/action/CartAction';
// import { Productsdata } from './store/action/Productaction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncCurrentUser())
    dispatch(asyncloadaProducts())

  }, [])
  return (
    <>
      <Navbar />
      <div className=' p-[2%]'>


        <Mainroutes />

      </div>
    </>
  )
}

export default App
