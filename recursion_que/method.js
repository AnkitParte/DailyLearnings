
let arr = [1,2]
function main(n,arr){
    let idx =0 ;
    let ans=[];
    subset(n,0,arr,[],ans)
    console.log(ans)
}

function subset(n,idx,arr,temp,ans){
    if(idx==n){
        ans.push(temp)
        return;
    } 
    subset(n,idx+1,arr,temp,ans)
    subset(n,idx+1,arr,[...temp,arr[idx]],ans)
}

main(2,arr)