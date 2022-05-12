import { ActionTypes } from "../constants/action-types";
const initialState = {
    products:[]
}
export const productReducer =(state=initialState, {type, payload})=>{
    switch(type){
        case ActionTypes.FETCH_PRODUCTS:
            return {...state, products:payload};
        default:
            return state;
    }
}