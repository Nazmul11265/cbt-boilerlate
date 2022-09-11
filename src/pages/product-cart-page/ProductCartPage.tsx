import React, { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import QuantityControl from "../../components/quantity-control/QuantityControl";
import RemoveButton from "../../components/remove-button/RemoveButton";
import "./ProductCartPage.scss";

const ProductCartPage = () => {
    const [quan, setQuan] = useState(0);
    const clickedOnPlus = () => {
        setQuan((prev:number)=>{
            return prev + 1;
        })
    }
    const cartProducts = useSelector((state:any)=> state.carts)
    console.log(cartProducts);

    const getTotalPrice = (unitPrice:string, quantity:number) => {
        const price = parseInt(unitPrice.split('$')[1]);
        const totalPrice = price * quantity;
        return totalPrice;
    }
    
    return (
        <Layout>
            <div className="product-cart-list">
                <h2 className="product-cart-list__title">List of items in cart</h2>
                <table className="product-cart-list__table">
                    <tr>
                        <th>Serial</th>
                        <th>Product name</th>
                        <th>Product Unit price</th>
                        <th>Product image</th>
                        <th>Quantity</th>
                        <th>Quantity control</th>
                        <th>Product Total price</th>
                        <th>Action</th>
                    </tr>
                    {
                        cartProducts && cartProducts.carts.map((element: any, index: any) => {
                            return (
                                <tr key={index}>
                                    <td>{element.id}</td>
                                    <td>{element.name}</td>
                                    <td>{element.price}</td>
                                    <td><img src={element.image} alt="" width="100px" height="80px"/></td>
                                    <td>{element.quantity}</td>
                                    <td>{<QuantityControl quantity={1} onClick={clickedOnPlus}/>}</td>
                                    <td>${getTotalPrice(element.price,element.quantity)}</td>
                                    <td><RemoveButton/></td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </Layout>
    )
}
export default ProductCartPage;