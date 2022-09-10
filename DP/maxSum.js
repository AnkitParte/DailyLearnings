//maximum sum of non adjacent element
//like [9,9,8,2], 9+8,9+2,8+9,2+9;
// so answer is 9+8=17;

let arr = [9,9,8,2];
let n = arr.length;

function main(arr,n){

    let ans = solveTab(arr,n)
    console.log(ans);

}
function solveTab(arr,n){
    let dp = new Array(n).fill(-1);
    dp[0]=arr[0];

    for(let i=1;i<n;i++){
        let incl = dp[i-2] + arr[i];
        let excl = dp[i-1] + 0;
        if(isNaN(incl)) incl=0;
        if(isNaN(excl)) excl=0;
        //console.log(incl,excl);
        dp[i] = Math.max(incl,excl); 
    }

    return dp[n-1];
}

main(arr,n);
// 9,9,8,2;
