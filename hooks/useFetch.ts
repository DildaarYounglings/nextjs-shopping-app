import React from 'react'

type FetchOptions = {url:string,method:string,}
export const useFetch = async function(fetchOptions:FetchOptions,product:any){
    const response = await fetch(fetchOptions.url, {
        method:fetchOptions.method,
        body: JSON.stringify({...product}),
        headers: {
          "Content-Type":"application/json",
        },
      });
    const data = await response.json;
}