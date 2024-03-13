import React, { useEffect, useState } from "react";
import { Seller } from "../models/Seller";
import { getAllSellersAPI } from "../Services/SellerAPIService";
import { SingleSeller } from "./SingleSeller";
import {json} from "stream/consumers";

export function SellerList(){
    const[allSellers, setAllSellers] = useState<Seller[]>([])

    useEffect(() => {
        getAllSellersAPI()
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            setAllSellers(json);
          });
      }, []);

      return (
        <>
          {allSellers.length <= 0 && <p>Seller list is empty</p>}
          {allSellers.map((seller) => {
            return <SingleSeller key={seller.id} data={seller}></SingleSeller>;
          })}
        </>
      );
    }