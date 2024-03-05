export class MapToObjectConverter<K,V>{
    ConvertToObject(map:Map<K,V>){
        const obj:Record<string,V> = {};
        map.forEach((value,key) => {
            obj[String(key)]= value;
        })
        return obj
    }
}