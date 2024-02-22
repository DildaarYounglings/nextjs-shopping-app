"use client";

import { Product } from "@/app/api/products/data";
import React, { useEffect, useState } from "react";

const ProductsPage = () => {
  const [productsArray, setProductsArray] = useState<Product[]>([]);
  useEffect(()=>{
    fetch("/api/products/").then((res:Response) => res.json()).then((d:Product[]) => setProductsArray(d)).catch((err) => console.log(err));
  },[])
  const handleSendToCheckout = async function(product:Product){
    const response = await fetch("/api/checkout", {
      method:'POST',
      body: JSON.stringify({...product}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json;
    console.log(data);
  }
  if (window.innerWidth <= 500) {
    return (
      <div className="flex gap-10" style={{ width: "1fr" }}>
        {productsArray.length > 0 &&(
          productsArray.map((product,index) => (
            <div
              key={index}
              className="flex flex-col p-3 bg-white rounded-3xl"
              style={{ height: "1fr", width: "200px" }}
            >
              <span>{product.stickerName}</span>
              <span>R {product.stickerPrice}</span>
              <button onClick={() => {handleSendToCheckout(product)}} type="button" className="w-full h-fit p-1 bg-green-300 hover:bg-slate-100">
                buy
              </button>
            </div>
          ))
        )}
      </div>
    );
  }
  return (
    <div className="flex gap-10" style={{ width: "1fr" }}>
      {productsArray.length > 0 ? (
        productsArray.map((product,index) => (
          <div
            key={index}
            className="flex flex-col p-3 bg-white rounded-3xl"
            style={{ height: "1fr", width: "200px" }}
          >
            <span>{product.stickerName}</span>
            <span>R {product.stickerPrice}</span>{" "}
            <button onClick={() => handleSendToCheckout(product)} type="button" className="w-full h-fit p-1 bg-green-300">
              buy
            </button>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductsPage;
