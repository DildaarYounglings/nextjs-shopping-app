import { Product } from '@/app/api/products/data';
import React, { useEffect, useState } from 'react'

export const useGET = (url:string) => {
    const [variable, setVariable] = useState<Product[]>([]);
    useEffect(() => {
        fetch(url).then((res: Response) => res.json()).then((d: Product[]) => setVariable(d)).catch((err) => console.log(err));
    }, [])
    return ({ variable, setVariable })
}
