export type CheckoutProduct = {
    id:number,
    stickerName:string,
    stickerPrice:number,
} | {
    id:number,
    stickerName:string,
    stickerPrice:number,
    mode:string
}
export let checkoutCart:CheckoutProduct[] = []