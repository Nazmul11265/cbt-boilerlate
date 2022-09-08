import React from "react";
import AddToCartButton from "../add-to-cart-button/AddToCartButton";
import "./ProductCard.scss";


interface productProps {
    name: string,
    image: string,
    price: string
}

const ProductCard = (props: productProps) => {
    return (
        <div className="product-card">
            <img className="product-card__image" src={props.image} alt="Product image" />
            <p className="product-card__name">{props.name}</p>
            <p className="product-card__price">{props.price}</p>
            <AddToCartButton/>
        </div>
    )
}
export default ProductCard;