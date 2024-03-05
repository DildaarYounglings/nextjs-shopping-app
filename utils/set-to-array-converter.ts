export class SetToArrayConverter<T>{
    array:T[] = []
    constructor(){this.array = []}
    ConvertToArray(set:Set<T>){
        const array:T[] = this.array.map((itemInArray) => {
            set.forEach((itemInSet) => {
                itemInArray = itemInSet;
            })
            return itemInArray
        })
        return array;
    }
}