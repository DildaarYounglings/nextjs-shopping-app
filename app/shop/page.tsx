
import Nav from '@/components/Nav';
import ProductsPage from '@/components/ProductsPage';
import React from 'react';

export default function Page(){
  return(
    <React.Fragment>
      <main style={{display:"flex",position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)",height:"fit-content",width:"100%",padding:"1rem",margin:"0px auto"}}>
        <ProductsPage/>
      </main>
    </React.Fragment>
  )
}