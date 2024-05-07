import { create } from "zustand";
export type CheckoutProduct = {
    stickerName:string,
    stickerPrice:number,
}
export type Checkout_Cart_State = {
    checkoutCart:CheckoutProduct[],
    addToCheckoutCart:(product:CheckoutProduct) =>void,
    deleteFromCheckoutCart:(product:CheckoutProduct) =>void,
}
const checkoutCart:CheckoutProduct[] =[];
export const useCheckoutCart = create<Checkout_Cart_State>((set)=>({
    checkoutCart,
    addToCheckoutCart:(product:CheckoutProduct)=>set((state)=>{
        if(state.checkoutCart.includes(product) === false ){
            return {checkoutCart:[...state.checkoutCart,product]};
        }else{
            return {checkoutCart:[...state.checkoutCart]};
        }
    }),
    deleteFromCheckoutCart:(product:CheckoutProduct)=>set((state)=>{
        const set = new Set<CheckoutProduct>(state.checkoutCart);
        set.delete(product);
        let array:CheckoutProduct[] = [];
        set.forEach((value:CheckoutProduct)=>{
            array.push(value);
        });
        return {checkoutCart:array};
    })
}));