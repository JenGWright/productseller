import React from "react";
import { SellerList } from "../components/SellerList";
import { SellerSubmit } from "../components/SellerSubmit";

export function SellerPage(){
    return(
        <>
        <h1> Seller Page</h1>
        <SellerList></SellerList>
        <SellerSubmit></SellerSubmit></>

    )

}