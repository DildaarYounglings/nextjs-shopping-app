import React, { useEffect } from 'react';

function Layout({children}:{children:React.ReactNode}){
  return (
    <div>
        {children}
    </div>
  )
}

export default Layout