import { create } from "zustand";
export type CheckoutProduct = {
    id:number,
    stickerName:string,
    stickerPrice:number,
}
const checkoutCart:CheckoutProduct[] =[];
const useCheckoutCart = create((set)=>({
    checkoutCart,
    addToCheckoutCart:(product:CheckoutProduct)=>set((state)=>{
        if(state.checkoutCart.includes(product) === false ){
            return {checkoutCart:[...state.checkoutCart,product]};
        }else{
            return {checkoutCart:[...state.checkoutCart]};
        }
    }),
    DeleteFromCheckoutCart:(product:CheckoutProduct)=>set((state)=>{
        const set = new Set<CheckoutProduct>(state.checkoutCart);
        set.delete(product);
        let array:CheckoutProduct[] = [];
        set.forEach((value:CheckoutProduct)=>{
            array.push(value);
        });
        return {checkoutCart:array};
    })
}));