
import ProductsPage from '@/components/ProductsPage';
import { UserProfilePage } from '@/components/UserProfilePage';
import React from 'react';

export default function Page(){

  return(
    <React.Fragment>
      <main className="flex flex-col absolute left-1/2 w-full h-fit" style={{top:"55%",transform:"translateX(-50%) translateY(-50%)",padding:"1rem",margin:"0px auto"}}>
        <UserProfilePage/>
      </main>
    </React.Fragment>
  )
}