"use client";
import { CheckoutProduct, Checkout_Cart_State, useCheckoutCart } from "../globalZustandState/global-state";
import { useFetch } from "@/hooks/useFetch";
import React, {useState} from "react";

function CheckoutCart() {
  const [isCheckoutCartOpen, setIsCheckoutCartOpen] = useState(false);
  const { checkoutCart, setCheckoutCart } = useCheckoutCart(state => state);
  const handleDeleteFromCheckoutCart = (product: CheckoutProduct)=>{
    const s = new Set<CheckoutProduct>(checkoutCart);
    s.delete(product);
    let array:CheckoutProduct[] = [];
    s.forEach((value: CheckoutProduct) => {
      array.push(value);
    });
    setCheckoutCart((state) => ({ checkoutCart: [...array] }));
  }
  const handleClearCheckout = ()=>{
    setCheckoutCart((state) => ({ checkoutCart: [] }));
  }
  if (isCheckoutCartOpen) {

    return (
      <React.Fragment>
        <div
          className="fixed right-3 flex flex-col"
          style={{ bottom: "4rem", backgroundColor: "darkcyan", height: "fit-content", width: "200px", padding: "1rem", gap: "1rem" }}
        >
          <div className="flex" style={{ gap: "2rem" }}>
            <button
              onClick={() => setIsCheckoutCartOpen(false)}>
              X
            </button>
            <button
              onClick={()=>handleClearCheckout()}
              style={{ backgroundColor: "red" }}>
              🗑️
            </button>
          </div>
          {checkoutCart.length > 0 &&
            checkoutCart.map((checkoutProduct, index) => <div className="bg-white cursor-pointer" style={{ padding: "1rem", border: "1px solid black" }} key={index}>
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
            onMouseOver={(e) => { e.preventDefault() }}
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