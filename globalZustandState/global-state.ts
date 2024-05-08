import { create } from "zustand";
export type CheckoutProduct = {
    stickerName: string,
    stickerPrice: number,
}
export type Checkout_Cart_State = {
    checkoutCart: CheckoutProduct[],
    setCheckoutCart: (setterFunction: (state: Checkout_Cart_State) => Checkout_Cart_State|any) => void,
}
const checkoutCart: CheckoutProduct[] = [];
export const useCheckoutCart = create<Checkout_Cart_State>((set) => ({
    checkoutCart,
    setCheckoutCart: (setterFunction) => set(setterFunction)
}));
