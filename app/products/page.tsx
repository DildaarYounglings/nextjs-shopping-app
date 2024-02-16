import ProductsPage from '@/components/ProductsPage';
import useGet from '@/hooks/useGet';
import React, { useEffect, useState } from 'react';
type Product = {
  stickerName:string,
  stickerPrice:number,
}

const Page = () => {
  return(<ProductsPage/>)
}

export default Page;