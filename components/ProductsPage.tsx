"use client"
import React, { useEffect, useState } from 'react';
type Product = {
    stickerName:string,
    stickerPrice:number,
}
const ProductsPage = () => {
    const [windowWidth,setWindowWidth] = useState(0);
    const [productsArray,setProductsArray] = useState<any[]>([]);
    useEffect(
        () => {
            fetch("/api/products/").then(res => res.json()).then(data => setProductsArray(data));
            setWindowWidth(window.innerWidth);
        },[windowWidth]
    )
    if(windowWidth <= 500){
        return(
        <div>ProductsdisplayMobileView</div>
        )
    }
  return (
    <div className="flex gap-10" style={{width:"1fr"}}>
        {productsArray.length > 0? productsArray.map((product) => (
            <div className="flex flex-col p-3 bg-white rounded-3xl" style={{height:"1fr",width:"200px"}}>
                <span>{product.stickerName}</span><span>R {product.stickerPrice}</span> <button type="button" className="w-full h-fit p-1 bg-green-300">buy</button>
            </div>
        )):<></>}
    </div>
  )
}

export default ProductsPage