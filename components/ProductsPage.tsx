"use client"
import useGet from '@/hooks/useGet';
import React, { useEffect, useState } from 'react';
type Product = {
    stickerName:string,
    stickerPrice:number,
}
const ProductsPage = () => {
    const [windowWidth,setWindowWidth] = useState(0);
    const [productsArray,setProductsArray] = useState<Product[]>([]);
    useEffect(()=>{
        const data = useGet("/api/products");
        setProductsArray(data)
        setWindowWidth(window.innerWidth);
    },[windowWidth])
    if(windowWidth <= 500){
        return(
        <div>ProductsdisplayMobileView</div>
        )
    }
  return (
    <div>{productsArray.map((product) => {
        return(<div>{product}</div>);
    }
    )}
    </div>
  )
}

export default ProductsPage