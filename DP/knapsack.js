//knapsack problem
//console.log(8>>1)

let n = 4;
let weight = [1,2,4,5];
let value = [5,4,8,6];
let cap = 5
//max answer can be 
//if we took weigth of 1 and 4 then the corresponding value is 5+8=13;

function main(n,weight,value,cap){
    //solve(weight,value,n-1,cap);
    let dp = new Array(n).fill(0).map((el)=>new Array(cap+1).fill(-1));
    console.log(solveMem(weight,value,n-1,cap,dp))
    //console.log(dp);
}

function solveMem(weight,value,idx,cap,dp){
    //this solution will going to five a t.l.e.
    if(idx==0){
        if(weight[idx]<=cap){
            return value[idx]
        }else{
            return 0;
        }
    }

    if(dp[idx][cap]!==-1) return dp[idx][cap];

    let incl = 0;
    if(weight[idx]<=cap){
        incl = value[idx] + solveMem(weight,value,idx-1,cap-weight[idx],dp)
    }
    let excl = 0 + solveMem(weight,value,idx-1,cap,dp);

    dp[idx][cap] = Math.max(incl,excl);
    return dp[idx][cap];
}

function solve(weight,value,idx,cap){
    //this solution will going to five a t.l.e.
    if(idx==0){
        if(weight[0]<=cap){
            return value[0]
        }else{
            return 0;
        }
    }

    let incl = 0;
    if(weight[idx]<=cap){
        incl = value[idx] + solve(weight,value,idx-1,cap-weight[idx])
    }
    let excl = 0 + solve(weight,value,idx-1,cap-weight[idx]);

    let ans = Math.max(incl,excl);
    return ans;
}

main(n,weight,value,cap);
