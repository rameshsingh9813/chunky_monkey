function chunkArrayInGroups(arr, size) {
let narr =[];
let nnarr=[];
for(i=0;i<arr.length;i+=size){
narr[i]=arr.slice(i,i+size);
}
for(let j=0;j<narr.length;j++){
    if(narr[j]){
        nnarr.push(narr[j])
    }
}
    return nnarr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));  //output=[[0, 1, 2], [3, 4, 5], [6]]