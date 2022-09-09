import { combineReducers } from "redux";
import productReducers from "./products.reducers";
import cartsReducers from "./carts.reducers";

const rootReducer = combineReducers({
  products: productReducers,
  carts: cartsReducers
});
export default rootReducer;