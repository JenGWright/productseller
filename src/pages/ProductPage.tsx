import React from "react";
import { ProductList } from "../components/ProductList";
import { ProductSubmit } from "../components/ProductSubmit";

export function ProductPage(){
    return (
        <>
        <h1>Product Page</h1>
        <ProductList></ProductList>
        <ProductSubmit></ProductSubmit>
    </>    
    );
}


