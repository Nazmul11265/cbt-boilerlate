import React from "react";
import AddToCartButton from "../add-to-cart-button/AddToCartButton";
import "./ProductCard.scss";


export type producType = {
    name: string,
    image: string,
    price: string
}
interface productProps {
    data: producType
}

const ProductCard: React.FC<productProps> = ({data}) => {
    return (
        <div className="product-card">
            <img className="product-card__image" src={data.image} alt="Product image" />
            <p className="product-card__name">{data.name}</p>
            <p className="product-card__price">{data.price}</p>
            <AddToCartButton product = {data}/>
        </div>
    )
}
export default ProductCard;