import { quantityIncreasedConstants } from "../constants/constants";

export const increaseProductQuantity = () => {
    return async (dispatch:any) => {
        try {
            dispatch({ type: quantityIncreasedConstants.Quantity_INCREASE_REQUEST });
            dispatch({
                type: quantityIncreasedConstants.Quantity_INCREASE_SUCCESS,
                payload: {}
            })
        } catch (error) {
            dispatch({ type: quantityIncreasedConstants.Quantity_INCREASE_FAILURE });
        }
    }
}