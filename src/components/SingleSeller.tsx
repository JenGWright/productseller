import React from "react";
import { Seller } from "../models/Seller";
interface propsInterface {
    data:Seller
}
export function SingleSeller(props:propsInterface){
    return (
        <>
        <h2>{props.data.id}</h2>
        <p>{props.data.name}</p>
        </>
    )
}