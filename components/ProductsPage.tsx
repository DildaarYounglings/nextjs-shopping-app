"use client";

import { Product } from "@/app/api/products/data";
import { useGET } from "@/hooks/useGET";
import { useFetch } from "@/hooks/useFetch";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import React, { useEffect, useState } from "react";

const ProductsPage = () => {
  const {windowDimensions} = useWindowDimensions();
  const {variable:productsArray} = useGET("/api/products/")
  const handleSendToCheckout = async function(product:Product){
    useFetch({url:"/api/checkout",method:'POST'},product);
  }
  if (windowDimensions.width <= 500) {
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
