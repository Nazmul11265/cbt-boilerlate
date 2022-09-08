import React from "react";
import Layout from "../../components/layout/Layout";
import ProductCard from "../../components/product-cards/ProductCard";
import HPImage from "../../images/hp.jpg";
import { products } from "../../data/products";
import "./ProductPage.scss";

const ProductPage = () => {
    return (
        <Layout>
            <div className="product-content">
                <h2 className="product-content__title">List of products</h2>
                <div className="product-content__products">
                    {products.map((element, index) => {
                        return (
                            <ProductCard name={element.name} price={element.price} image={element.image} key={index} />
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}
export default ProductPage;