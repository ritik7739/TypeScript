function delayCall(fn:()=>void){
    setTimeout(fn,1000);
}

delayCall(function(){
    console.log("Hi there");
});
