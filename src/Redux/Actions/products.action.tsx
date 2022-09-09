import { productConstants } from "../constants/constants";
import { products } from "../../data/products";

export const getAllProducts = () => {
    return async (dispatch:any)  => {
        try {
            dispatch({ type: productConstants.GET_PRODUCT_REQUEST });
            dispatch({
                type: productConstants.GET_PRODUCT_SUCCESS,
                payload: {
                    products
                }
            })
        } catch (error) {
            dispatch({ type: productConstants.GET_PRODUCT_FAILURE });
        }
    }
}