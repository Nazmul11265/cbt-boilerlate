import { cartConstants } from "../constants/constants";

interface actions {
    type: string,
    payload: any
}
const initialState: any = {
    carts: []
};
const productAdd = (carts:any,product:any) => {
    const isFound = carts.find((x:any)=> x.id == product.id)
    if(isFound) {
        const index = carts.findIndex((x:any)=> x.id == product.id);
        carts[index].quantity = carts[index].quantity + 1;
        return carts;
    }
    else {
        return [
            ...carts,
            {
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: 1
            }
        ]
    }
}
export default (state=initialState,action:actions)=>{
    console.log(action);
    switch(action.type){
        case cartConstants.ADD_TO_CART_REQUEST: {
            state={ ...state }
            break;
        }    
        case cartConstants.ADD_TO_CART_SUCCESS: {
            const product: any = action.payload.product;
            const updatedCarts = productAdd(state.carts,product)
            state={ ...state, carts: updatedCarts }
            break;
        }
        case cartConstants.ADD_TO_CART_FAILURE: {
            state= { ...state }
            break;
        }
    }
    return state;
}