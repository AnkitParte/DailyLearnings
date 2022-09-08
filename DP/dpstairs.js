// staircase question  
// how will steps will you going to take to get to n stairs
// bottom-up approach

let cost = [10,15,20];
let n = cost.length;
let dp = new Array(n+1).fill(-1);

dp[0]=cost[0];
dp[1]=cost[1];

for(let i=2;i<n;i++){
    dp[i] = cost[i] + Math.min(dp[i-1],dp[i-2]);
}

console.log(Math.min(dp[n-1],dp[n-2]));
