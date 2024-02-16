import React from 'react'

const useGet = async(url:string) => {
    return await fetch(url).then((res) => res.json());
}

export default useGet;