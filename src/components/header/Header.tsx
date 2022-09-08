import "./Header.scss";
import React from "react";
import CartImage from "../../images/cart.svg";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const clickedOnCart = () => {
        navigate('/cart-items')
    }
    const clickedOnBrand = () => {
        navigate('/')
    }
    return(
        <div className="header-div">
            <h1 className="header-div__brand" onClick={clickedOnBrand}>CBT-Assignment</h1>
            <button className="header-div__cart" onClick={clickedOnCart}>
                <img className="header-div__icon" src={CartImage} alt="cart-icon" />
                <span className="header-div__badge">25</span>
            </button>
        </div>
    )
}
export default Header;