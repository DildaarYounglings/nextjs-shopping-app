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
    <div>
        {productsArray.length > 0? productsArray.map((product) => (
            <div>
                {product.stickerName}{product.stickerPrice}
            </div>
        )):<></>}
    </div>
  )
}

export default ProductsPage