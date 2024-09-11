function maxvalue(arr:number[]){
    let max=0;
   for(let i=0;i<arr.length;i++){
       if(arr[i]>max){
        max=arr[i];
       }
   }
   return max;
}


console.log(maxvalue([1,2,3]));