
// this is the first problem related to DP

//fib
function fib(n){
    if(n<=1) return n;
    return fib(n-1) + fib(n-2);
}

let n = 6

let dp = new Array(n+1).fill(0).map((el)=>-1);

function fib(n,dp){
    if(n<=1) return n;

    dp[n] = fib(n-1,dp) + fib(n-2,dp);
    return dp[n];
}

console.log(fib(n,dp));

