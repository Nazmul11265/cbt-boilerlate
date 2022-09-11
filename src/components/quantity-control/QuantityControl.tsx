import React, {useState} from "react";
import "./QuantityControl.scss";

type myFunc = () => void;
interface QuantityProps {
    quantity: number,
    onClick: myFunc
}

const QuantityControl: React.FC <QuantityProps> = ( { quantity, onClick }) => {
    return (
        <div className="quantity-control">
            <button className="quantity-control__plus-minus">-</button>
            <p className="quantity-control__number">{quantity}</p>
            <button className="quantity-control__plus-minus" onClick={onClick}>+</button>
        </div>
    )
}
export default QuantityControl;