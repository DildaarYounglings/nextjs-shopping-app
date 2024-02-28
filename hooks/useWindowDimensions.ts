import React, { useEffect, useState } from 'react'

export type WindowDimensions = {height:number,width:number};
export const useWindowDimensions = function(){
    const [windowDimensions,setWindowDimensions] = useState<WindowDimensions>({height:0,width:0});
    useEffect(() => {
        window.addEventListener("resize", () => {
          setWindowDimensions({
            height: window.innerHeight,
            width: window.innerWidth,
          });
        });
        return () => {
          window.removeEventListener("resize", () => {
            setWindowDimensions((p) => {
              return { ...p };
            });
          });
        };
      },[]);
  return (
    {windowDimensions,setWindowDimensions}
  )
}
