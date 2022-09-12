/* eslint-disable @typescript-eslint/no-explicit-any */
import { productConstants } from "../constants/constants";

interface actions {
    type: string,
    payload: any
}
const initialState: any = [];
export default (state=initialState,action:actions)=>{
    console.log(action);
    switch(action.type){
        case productConstants.GET_PRODUCT_REQUEST: {
            state={ ...state }
            break;
        }    
        case productConstants.GET_PRODUCT_SUCCESS: {
            const products: any = action.payload.products;
            state={ products }
            break;
        }
        case productConstants.GET_PRODUCT_FAILURE: {
            state= { ...state }
            break;
        }
    }
    return state;
}