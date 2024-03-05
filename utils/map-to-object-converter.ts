export class MapToObjectConverter<K,V>{
    obj:any = {}
    ConvertToObject(map:Map<K,V>){
        map.forEach((value,key) => {
            this.obj[key]= value;
        })
        return this.obj
    }
}