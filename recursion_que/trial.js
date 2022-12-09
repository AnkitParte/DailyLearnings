/*
here you were given three numbers x,y,z
your task is to convert x to z you can perform following actions;
1. x*y
2. x-2
3. x-1
*/
main(5,2,2)
function main(x,y,z){
    if(x==z) return console.log(0);
    //console.log(x,y,z);
    let count = solve(x,y,z);
    function solve(x,y,z){
        if(x==z){
            return 0;
        }
        if(x<=z){
            let i = x*y
            //console.log(x)
            return 1 + solve(i,y,z);
        }
        if(x-2 >= z){
            return 1+solve(x-2,y,z);
        }
        if(x-1 >= z){
            return 1+solve(x-1,y,z);
        }
    }
    console.log(count);
    
}