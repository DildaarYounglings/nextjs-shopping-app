"use client";
import { CheckoutProduct } from "@/app/api/checkout/data";
import { useFetch } from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";

function CheckoutCart() {
  const [isCheckoutCartOpen, setIsCheckoutCartOpen] = useState(false);
  const [checkoutCart, setCheckoutCart] = useState<CheckoutProduct[]>([]);
  useEffect(() => {
    fetch("/api/checkout").then(res => res.json()).then(data => setCheckoutCart(data));
  }, [checkoutCart]);
  async function handleDeleteFromCheckoutCart(checkoutProduct: CheckoutProduct){
    const response = await fetch("/api/checkout", {
      method:'DELETE',
      body: JSON.stringify(checkoutProduct),
      headers:{"Content-Type":"application/json",},
    });
    const data = await response.json;
  }
  if (isCheckoutCartOpen) {
    return (
      <React.Fragment>
        <div
          className="fixed right-3 flex flex-col"
          style={{ bottom: "4rem",backgroundColor:"darkcyan",height:"fit-content",width:"200px",padding:"1rem",gap:"1rem"}}
        >
          <div className="flex" style={{gap:"2rem"}}><button onClick={()=>{setIsCheckoutCartOpen(false)}}>X</button><button style={{backgroundColor:"red"}}>🗑️</button></div>
          {checkoutCart.length > 0 &&
            checkoutCart.map((checkoutProduct, index) => <div className="bg-white cursor-pointer" style={{padding:"1rem",border:"1px solid black"}} key={index}>
              <p className="bg-white cursor-pointer">{checkoutProduct.stickerName}</p>
              <p className="bg-white cursor-pointer">{checkoutProduct.stickerPrice}</p>
              <button onClick={() => handleDeleteFromCheckoutCart(checkoutProduct)} className="w-full h-fit p-1 bg-green-300 hover:bg-slate-100 cursor-pointer">Delete</button>
            </div>)}
        </div>
        <div
          onClick={() => setIsCheckoutCartOpen(!isCheckoutCartOpen)}
          className={"fixed right-3 bottom-3 bg-white rounded-full cursor-pointer"}
          style={{ padding: "0.5rem 1.5rem" }}
        >
          <span
            onMouseOver={(e) => {e.preventDefault()}}
            className={"rounded-full cursor-pointer"}
            style={{
              border: "1px solid rgba(134,239,172,1)",
              padding: "0.3rem 0.3rem",
            }}
          >
            🛒
          </span>
        </div>
      </React.Fragment>
    );
  }
  return (
    <div
      onClick={() => setIsCheckoutCartOpen(!isCheckoutCartOpen)}
      className={"fixed right-3 bottom-3 bg-white rounded-full cursor-pointer"}
      style={{ padding: "0.5rem 1.5rem" }}
    >
      <span
        className={"rounded-full cursor-pointer"}
        style={{
          border: "1px solid rgba(134,239,172,1)",
          padding: "0.3rem 0.3rem",
        }}
      >
        🛒
      </span>
    </div>
  );
}
export default CheckoutCart;