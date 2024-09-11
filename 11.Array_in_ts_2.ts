interface Users{
    firstName:string;
    lastName:string;
    age:number;
}
function filteredUsers(users:Users[]){
    return (users.filter(x=>x.age>=18));
}

console.log(filteredUsers([
    {
        firstName:"ritik",
        lastName:"singh",
        age:21,
    },{
        firstName:"saurabh",
        lastName:"singh",
        age:16,
    }
]));
