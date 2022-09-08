

/*
function naturalNum(n){
    // if(n==0){
    //     return 0;
    // }
    // else{
    //     return (n + naturalNum(n-1));
    // }
}
*/
function naturalNum(n){
    return (n==0) ? 0 :  n+naturalNum(n-1);
}

/*
function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
*/
function factorial(n){
    return (n==0) ? 1 : n*factorial(n-1);
}
let y = factorial(6);
// 5*4*3*2*1
let x = naturalNum(6);
//console.log(y)

function fib(n){
    if(n==0){
        return 0;
    }
    if(n==1 || n==2){
        return 1;
    }
    else{
        return fib(n-1) + fib(n-2);
    }
}
let n=5;
let arr = [];
for(let i=0;i<n;i++){
    arr.push(fib(i));
}
//console.log(arr)

function fun(x,y){
    if(x == 0){
        return y;
    }
    else{
        return fun(x-1,y+x);
    }
}
let a = fun(10,6);
//console.log(a);


//print element from N to 1
function dec(n){
    if(n==0){
        return;
    }
    else{
        console.log(n)
        dec(n-1);
    }
}

//dec(7);

//print number from 0 to n

function inc(i,n){
    if(i>n){
        return;
    }
    else{
        console.log(i)
        inc(i+1,n);
    }
}

//inc(1,8);

//sum of first n natural numbers

/*function firstN(i,n,sum){
    
    if(i>n){
        
        console.log(sum);
        return;
    }
    else{
        sum = sum+i;
        firstN(i+1,n,sum);
    }
}*/
//firstN(1,6,0)
//prints 21, sum of first n natural numbers

function firstN(i,n,sum){
    return (i>n) ? sum : firstN(i+1,n,sum+i);
}

let c = firstN(1,6,0)
//console.log(c);

// print x**n

function pow(x,n){
    if(x==0){
        return 0;
    }
    else if(n==0){
        return 1;
    }
    else{
        return x * pow(x,n-1);
    }
}

let d = pow(2,5);
//console.log(d);

// function revStr(str,n){
//     if(n<0){
//         return;
//     }
//     else{
//         console.log(str[n])
//         revStr(str,n-1);
//     }
// }

function revStr(str,n){
    if(n<0){
        return "";
    }
    else{
        return str[n]+revStr(str,n-1);
    }
}


let str = "abcd"
//let e = str.length-1;
let ans = revStr(str,str.length-1);
//console.log(ans);
var first = -1,last = -1;
function occur(str,idx,el){
    if(idx == str.length){
        console.log(first,last);
        return; 
    }
    else{
        if(el == str[idx]){
            if(first == -1){
                first = idx;
                last = idx;
            }
            else{
                last = idx;
            }
        }
        occur(str,idx+1,el);
    }
}

str = "efgabcdafaga";
//str = "aa"
//let f = occur(str,0,"a");
occur(str,0,"a");
//console.log(f);




