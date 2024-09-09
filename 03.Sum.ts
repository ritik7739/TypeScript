//Type inference : function returns number because it takes two arguments of type number and returns a number   

//explicitly defining the return type of the function that is number
function Sum(a:number,b:number):number  //-> return type of the function is number
{
    return a+b;
}
console.log(Sum(10,20));