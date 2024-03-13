import React, { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { getallProductsAPI } from "../Services/ProductAPIService";
import { SingleProduct } from "./SingleProduct";

export function ProductList() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    getallProductsAPI()
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setAllProducts(json);
      });
  }, []);

  return (
    <>
      {allProducts.length <= 0 && <p>There are no products!</p>}
      {allProducts.map((product) => {
        return <SingleProduct key={product.id} data={product}></SingleProduct>;
      })}
    </>
  );
}
   