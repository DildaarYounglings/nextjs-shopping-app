
import ProductsPage from '@/components/ProductsPage';
import SignInPage from '@/components/SignInPage';
import React from 'react';

export default function Page(){

  return(
    <React.Fragment>
      <main className="flex absolute left-1/2 top-1/2 w-full" style={{transform:"translateX(-50%) translateY(-50%)",padding:"1rem",margin:"0px auto"}}>
        <form className="bg-white p-7">
          <SignInPage/>
        </form>
      </main>
    </React.Fragment>
  )
}