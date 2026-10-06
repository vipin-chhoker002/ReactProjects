

import axios from '../../api/axiosconfig';
import { loadProducts } from '../Reducers/ProductSlice';



export const asyncloadaProducts = () => async (dispatch, getState) => {
    try {
        let { data } = await axios.get("/Products");
        dispatch(loadProducts(data))

    } catch (error) {
        console.log(error)
    }
}
export const asyncCreateaProducts = (product) => async (dispatch, getState) => {
    try {
        // console.log(product) wor

        await axios.post("/Products", product)
        dispatch(asyncloadaProducts())



    } catch (error) {
        console.log(error)
    }
}
export const asyncUpdateProducts = (id, product) => async (dispatch, getState) => {
    try {


        await axios.patch("/Products/" + id, product)
        dispatch(asyncloadaProducts())



    } catch (error) {
        console.log(error)
    }
}
export const asyncDeleteProducts = (id, product) => async (dispatch, getState) => {
    try {


        await axios.delete("/Products/" + id)
        dispatch(asyncloadaProducts())



    } catch (error) {
        console.log(error)
    }
}




