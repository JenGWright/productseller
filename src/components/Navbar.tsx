import React from "react";
import { Link } from "react-router-dom";
export function Navbar(){
    return (
        <>
        <Link to="welcome">Welcome</Link>
        &ensp;
        <Link to="productPage">Product</Link>
        &ensp;
        <Link to="sellerpage">Seller</Link>
        

        </>
    )
}