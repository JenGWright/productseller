import React, { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { getallProductsAPI } from "../Services/ProductAPIService";

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

  return ( <>
  </>)

}
   