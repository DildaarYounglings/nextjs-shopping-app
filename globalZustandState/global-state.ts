import { allUserProfileState } from "@/components/UserProfilePage";
import { AnyRecord } from "dns";
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
const checkoutCart: CheckoutProduct[] = [];
export const useCheckoutCart = create<Checkout_Cart_State>((set) => ({
    checkoutCart:checkoutCart,
    setCheckoutCart(setterFunction)
    {
        set(setterFunction);
    }
}));

export type UserProfileState = {
    userProfile:allUserProfileState,
    setUserProfile: (setterFunction: (state:UserProfileState) => Checkout_Cart_State|any) => void,
}
export const useUserProfile = create<UserProfileState>((set) => ({
    userProfile:{username:"",email:"",imgSrc:""},
    setUserProfile(setterFunction)
    {
        set(setterFunction);
    }
}));
