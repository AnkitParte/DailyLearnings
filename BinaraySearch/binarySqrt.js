 //square root using binary search


let num = 36;

let si=0,ei=num,ans=-1;

while(si<=ei){

    let mid = si + Math.floor((ei-si)/2)

    if( (mid*mid) <= num){
        ans = mid;
        si = mid+1;
    }else{
        ei = mid-1;
    }
    //mid = si + Math.floor((ei-si)/2);
}

console.log(ans);



