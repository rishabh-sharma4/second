import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => async(dispatch)=>{
    const response = await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json());
    dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response})

}