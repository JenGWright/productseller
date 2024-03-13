import React, { SyntheticEvent, useState } from "react";
import { postSomeSeller } from "../Services/SellerAPIService";
import { Seller } from "../models/Seller";


export function SellerSubmit(){
    const [nameInput, setNameInput] = useState<string>("");
    function nameInputHandler(event: SyntheticEvent) {
      let textBox = event.target as HTMLTextAreaElement;
      setNameInput(textBox.value);
    }
    const [idInput, setIdInput] = useState<string>("");
    function idInputHandler(event: SyntheticEvent) {
      let textBox = event.target as HTMLTextAreaElement;
      setIdInput(textBox.value);
    }
  
    function buttonClickHandler() {
      let seller: Seller = {
        id: parseInt(idInput),
        name: nameInput,
      };
      postSomeSeller(seller);
    }
  
    return (
      <form onSubmit={buttonClickHandler}>
        <h1>Enter New Seller</h1>
        <input
          onChange={idInputHandler}
          value={idInput}
          placeholder="Enter Seller ID"
        ></input>
        <input
          onChange={nameInputHandler}
          value={nameInput}
          placeholder="Enter Seller Name"
        ></input>
        <button type="submit">Submit</button>

      

        </form>
    ); 
  }
