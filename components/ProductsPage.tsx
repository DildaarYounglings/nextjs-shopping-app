"use client";

import { CheckoutProduct, Checkout_Cart_State, useCheckoutCart } from "../globalZustandState/global-state";
import { useGET } from "@/hooks/useGET";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";


const ProductsPage = () => {
  const {windowDimensions} = useWindowDimensions();
  const {variable:productsArray} = useGET("/api/products/")
  const {checkoutCart,setCheckoutCart}:Checkout_Cart_State = useCheckoutCart(state => state);
  function addToCheckoutCart(product:CheckoutProduct){
    if(checkoutCart.includes(product)===false){
      setCheckoutCart(state=>({checkoutCart:[...state.checkoutCart,product]}));
    }
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
              <button onClick={() => addToCheckoutCart(product)} type="button" className="w-full h-fit p-1 bg-green-300 hover:bg-slate-100">
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
            <button onClick={() => addToCheckoutCart(product)} type="button" className="w-full h-fit p-1 bg-green-300">
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
