import React from "react";
import { Link } from "react-router-dom";
import mongoose from "mongoose";
import "./products.scss"

const Products =()=>{

    const data ={
     
    };
    return(
        <>
        <div className="products">
        <h1>Products</h1>
        <div className="items">
        <Link to ="/Products/1">Product1</Link>
        <Link to ="/Products/2">Product2</Link>
        <Link to ="/Products/3">Product3</Link>
        <Link to ="/Products/4">Product4</Link>
        </div>
        </div>
        </>
    )
}

export default Products;