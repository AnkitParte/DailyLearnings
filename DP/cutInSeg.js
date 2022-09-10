//given n ,x,y,z
//check if n can be cut into x , y or z sizes
let n = 7;//8
let [x,y,z] = [5,2,2]//3,3,3
//here ans=3
function main(n,x,y,z){
    let dp = new Array(n+1).fill(-1);

    let ans = solve(n,x,y,z,dp);
    return (ans<0) ? console.log(0) : console.log(ans)
}
function solve(n,x,y,z,dp){
    if(n==0) return 1;
    if(n<0) return -Infinity;
    if(dp[n]!==-1){
        return dp[n];
    }

    let a = solve(n-x,x,y,z,dp)+1;
    let b = solve(n-y,x,y,z,dp)+1;
    let c = solve(n-z,x,y,z,dp)+1;
    
    dp[n] = Math.max(a,b,c);
    return dp[n];
}
main(n,x,y,z)