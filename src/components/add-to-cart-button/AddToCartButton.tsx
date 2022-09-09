import React from "react";
import "./AddToCartButton.scss";
import { producType } from "../product-cards/ProductCard";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../Redux/Actions/carts.action";

interface ButtonProps {
    product: producType
}
const AddToCartButton:React.FC<ButtonProps> = ({product}) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(addProductToCart(product))  
    }
    return (
        <button className="add-to-cart" onClick={addToCart}>Add to cart</button>
    )
}
export default AddToCartButton;