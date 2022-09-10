//here the task to rob max money
//all house are arranged in circular order

let arr = [1,3,2,7];
let n = arr.length;

function main(n,arr){
    let max = Math.max(solve(0,n-1,arr),solve(1,n,arr))
    console.log(max);
}
function solve(i,n,arr){
    if(arr.length<=1) return arr[0];

    let dp = new Array(n).fill(-1);

    for(let j=i;j<n;j++){
        let incl = dp[j-2]+arr[j];
        let excl = dp[j-1]+0;
        if(isNaN(incl)) incl=0;
        if(isNaN(excl)) excl=0;
        dp[j] = Math.max(incl,excl)
    }
    return dp[n-1];
}

main(n,arr);
