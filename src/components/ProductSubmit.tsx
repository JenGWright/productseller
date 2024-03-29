import React, { SyntheticEvent, useState } from "react";
import { Product } from "../models/Product";
import { postProductAPI } from "../Services/ProductAPIService";
export function ProductSubmit() {

  const [nameInput, setNameInput] = useState<string>("");
  function nameInputHandler(event: SyntheticEvent) {
    let textBox = event.target as HTMLTextAreaElement;
    setNameInput(textBox.value);
  }

  const [priceInput, setPriceInput] = useState<string>("");
  function priceInputHandler(event: SyntheticEvent) {
    let textBox = event.target as HTMLTextAreaElement;
    setPriceInput(textBox.value);
  }

  const [sellerInput, setSellerInput] = useState<string>("");
  function sellerInputHandler(event: SyntheticEvent) {
    let textBox = event.target as HTMLTextAreaElement;
    setSellerInput(textBox.value);
  }

  function buttonClickHandler() {
    let product: Product = {
      id: 0,
      name: nameInput,
      price: parseInt(priceInput),
      seller: parseInt(sellerInput)
    };
    postProductAPI(product);
  }

  return (
  
    <form onSubmit={buttonClickHandler}>
      <h1>Submit a new product</h1>
      <input
        onChange = {nameInputHandler}
        value = {nameInput}
        placeholder="Enter Product Name"
        ></input>
      
      <input
        onChange = {priceInputHandler}
        value = {priceInput}
        placeholder="Enter Price"
        ></input>

      <input
        onChange = {sellerInputHandler}
        value = {sellerInput}
        placeholder="Enter Seller ID"
        ></input>

      <button type = "submit" >Submit</button>

      </form>
      

    
  );
}