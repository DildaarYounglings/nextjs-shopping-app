"use client";
import React, { useEffect, useState } from "react";
type Product = {
  stickerName: string;
  stickerPrice: number;
};
const ProductsPage = () => {
  const [productsArray, setProductsArray] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/products/")
      .then((res) => res.json())
      .then((data) => setProductsArray(data));
  }, []);
  async function handleSendToCheckout(product: any) {
    const d = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  }
  if (window.innerWidth <= 500) {
    return (
      <div className="flex gap-10" style={{ width: "1fr" }}>
        {productsArray.length > 0 ? (
          productsArray.map((product) => (
            <div
              className="flex flex-col p-3 bg-white rounded-3xl"
              style={{ height: "1fr", width: "200px" }}
            >
              <span>{product.stickerName}</span>
              <span>R {product.stickerPrice}</span>
              <button onClick={() => {handleSendToCheckout(product)}} type="button" className="w-full h-fit p-1 bg-green-300">
                buy
              </button>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    );
  }
  return (
    <div className="flex gap-10" style={{ width: "1fr" }}>
      {productsArray.length > 0 ? (
        productsArray.map((product) => (
          <div
            className="flex flex-col p-3 bg-white rounded-3xl"
            style={{ height: "1fr", width: "200px" }}
          >
            <span>{product.stickerName}</span>
            <span>R {product.stickerPrice}</span>{" "}
            <button type="button" className="w-full h-fit p-1 bg-green-300">
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
