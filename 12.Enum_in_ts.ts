
// enum Direction{
//     Up,//0
//     Down, //1
//     Right, //2
//     Left,  //3
// }


//How to change the values?

// enum Direction{
//     Up=10,
//     Down, //Becomes 11 Bydefault
//     Right, //Becomes 12
//     Left,  //Becomes 13
// }


//Can value also be a String
enum Direction{
    Up="Up",
    Down="Down",
    Right="Right",
    Left="Left",
}

function doSomething(keyPressed:Direction){
    //do something
    if(keyPressed==Direction.Up){
        
    }
}

doSomething(Direction.Down);
console.log(Direction.Up);
console.log(Direction.Left);
