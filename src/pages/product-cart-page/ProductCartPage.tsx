import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import "./ProductCartPage.scss";

const ProductCartPage = () => {
    const p = useSelector((state:any)=> state.carts)
    console.log(p);
    
    return (
        <Layout>
            <div className="product-cart-list">
                <h2 className="product-cart-list__title">List of items in cart</h2>
                <table className="product-cart-list__table">
                    <tr>
                        <th>Serial</th>
                        <th>Product name</th>
                        <th>Product image</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                </table>
            </div>
        </Layout>
    )
}
export default ProductCartPage;