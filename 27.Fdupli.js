
let a = [2,3,1,2,3];
let n = 5;


let ans = new Array(n).fill(0);
let i=0;
while(i<n){
    if(ans[a[i]] == 0){
        ans[a[i]]++;
    }
    else{
        ans[a[i]]++;
    }
    i++;
}
console.log(ans);
a = [];
for(let i=0;i<n;i++){
    if(ans[i]>1){
        a.push(i);
    }
}
if(a.length == n){
    console.log ([-1]);
}
else{
    console.log(a);
}