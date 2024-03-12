import React, { useState } from 'react'

export const useChangeStyles = function() {
    const [elementStyle,setElementStyle] = useState({});
  return ({elementStyle,setElementStyle})
}
export default useChangeStyles