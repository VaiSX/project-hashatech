import React from "react";
import { useParams } from "react-router-dom";
import './product.scss';
import Enquire from "../components/Enquire";

const Product =()=>{
    const { id } = useParams();
    return(
        <>
        <div className="product">
        <div className="prodcut-img">
            <h1>IMG</h1>
        </div>
        <div className="product-info">
            <h1>Product Name</h1>
            <p>Description</p>
        </div>
        </div>
        <Enquire/>
        </>
    )
}

export default Product;