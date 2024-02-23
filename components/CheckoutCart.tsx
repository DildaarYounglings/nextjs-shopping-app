"use client";
import { CheckoutProduct } from "@/models/checkoutCart";
import React, { useEffect, useState } from "react";

function CheckoutCart() {
  const [isCheckoutCartOpen, setIsCheckoutCartOpen] = useState(false);
  const [checkoutCart, setCheckoutCart] = useState<CheckoutProduct[]>([]);
  useEffect(() => {
    fetch("/api/checkout").then(res => res.json()).then(data => setCheckoutCart(data));
  }, [checkoutCart]);
  if (isCheckoutCartOpen) {
    return (
      <React.Fragment>
        <div
          className="fixed right-3 flex-col bg-white"
          style={{ bottom: "4rem" }}
        >
          {checkoutCart.length > 0 &&
            checkoutCart.map((checkoutProduct, index) => <div key={index}>{checkoutProduct.id} {checkoutProduct.stickerName} {checkoutProduct.stickerPrice}</div>)}
        </div>
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
