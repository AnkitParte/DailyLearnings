
//sub array with given sum;
let arr = [1,2,3,4,5,6,7,8,9,10]//inputs
let n=10,s=15;//inputs

let start=0,end=start+1;
let sum ;

sum = arr[start];

while(end<n){
    //1,2,3,4,5,6,7,8,9,10
    if(sum == s){
        
        console.log([start+1,end]);
        return;
    }
    else if(sum > s){
        sum -= arr[start];
        start++;
    }
    else{
        sum += arr[end]
        end++;
    }
    
}
if(sum == s){
    console.log([start+1,end-1]);
    return;
}

console.log([-1]);;