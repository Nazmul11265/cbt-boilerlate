import { combineReducers } from "redux";
import productReducers from "./products.reducers";

const rootReducer = combineReducers({
  products: productReducers
});
export default rootReducer;