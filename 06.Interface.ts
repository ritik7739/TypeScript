interface User{
    firstName:string;
    lastName:string;
    email:string;
    age:number;
}

function isLegal(user:User){
    if(user.age>18){
        return true;
    }else{
        return false;
    }
}

console.log(isLegal({
    firstName:"ritik",
    lastName:"singh",
    email:"ritik@gamil.com",
    age:20,
}));