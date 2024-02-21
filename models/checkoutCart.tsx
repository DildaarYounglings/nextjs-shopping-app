import { Product } from "./products"

export type CheckoutProduct = {
    id:number,
    stickerName:string,
    stickerPrice:number,
}
export let checkoutCart:CheckoutProduct[] = []