import { SetToArrayConverter } from "./set-to-array-converter";

export class SingleObjectArray<T>{
    array:T[];
    constructor(...params:T[]) {
        this.array = [...params]
    }
    push(item:T){
        if(this.array.length >= 1) return;
        this.array.push(item)
    }
    clear(){
        const s:Set<T> = new Set(this.array);
        s.clear();
        this.array = new SetToArrayConverter<T>().ConvertToArray(s);
    }
}