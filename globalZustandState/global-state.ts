import { UserProfile } from "firebase/auth";
import { create } from "zustand";
export type CheckoutProduct = {
    stickerName: string,
    stickerPrice: number,
    stickerQuantity:number
}
export type Checkout_Cart_State = {
    checkoutCart: CheckoutProduct[],
    setCheckoutCart: (setterFunction: (state: Checkout_Cart_State) => Checkout_Cart_State|any) => void,
}
export const useCheckoutCart = create<Checkout_Cart_State>((set) => ({
    checkoutCart,
    setCheckoutCart: (setterFunction) => set(setterFunction)
}));

export type UserProfileState = {
    userProfile:any,
    setUserProfile: (setterFunction: (state:UserProfileState) => Checkout_Cart_State|any) => void,
}
const checkoutCart: CheckoutProduct[] = [];
export const useUserProfile = create<UserProfileState>((set) => ({
    userProfile:{},
    setUserProfile: (setterFunction) => set(setterFunction)
}));
