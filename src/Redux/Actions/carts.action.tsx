import { cartConstants } from "../constants/constants";

export const addProductToCart = (data: any) => {
    return async (dispatch:any) => {
        try {
            dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
            dispatch({
                type: cartConstants.ADD_TO_CART_SUCCESS,
                payload: {
                    product: data
                }
            })
        } catch (error) {
            dispatch({ type: cartConstants.ADD_TO_CART_FAILURE });
        }
    }
}