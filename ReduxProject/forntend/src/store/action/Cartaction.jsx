

import axios from '../../api/axiosconfig';
import { loadCart } from '../Reducers/CartSlice';
export const cartdata = () => async (dispatch, getState) => {
    try {
        let data = await axios.get("/cart");



        dispatch(loadCart(data.data))

    } catch (error) {
        console.log(error)
    }
}




