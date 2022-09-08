

let n=4;

function Nways(n){
    if(n==0){ return 1}
    if(n<0){ return 0}
    return Nways(n-1) + Nways(n-2) + Nways(n-3);
}

let ans = Nways(n);
console.log(ans);