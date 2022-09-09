import React, {useEffect} from "react";
import Layout from "../../components/layout/Layout";
import ProductCard from "../../components/product-cards/ProductCard";
import { products } from "../../data/products";
import { useDispatch, useSelector } from 'react-redux';
import "./ProductPage.scss";
import { getAllProducts } from "../../Redux/Actions/products.action";

const ProductPage = () => {
    const dispatch = useDispatch();
    const productsData = useSelector((state:any)=> state.products.products);
    console.log(productsData);
    
    
    useEffect(() => {
        dispatch(getAllProducts());
    }, []);
    return (
        <Layout>
            <div className="product-content">
                <h2 className="product-content__title">List of products</h2>
                <div className="product-content__products">
                    { productsData && productsData.map((element:any, index:number) => {
                        return (
                            <ProductCard data={element} key={index} />
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}
export default ProductPage;