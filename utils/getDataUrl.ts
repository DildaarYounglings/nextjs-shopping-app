const getDataUrl = function(fileData:Blob|File){
    const reader = new FileReader();
    let url;
      reader.addEventListener("load",()=>{
        url = reader.result;
      })
      reader.readAsDataURL(fileData);
      if(!url)return;
      if(typeof url === "string") return url;
}

export default getDataUrl