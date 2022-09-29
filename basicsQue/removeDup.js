//remove duplicates
var arr=[0,0,1,1,1,2,2,3,3,4,5];

var left =1;
var right=1;
var N=arr.length;

while(right<N){
    if(arr[right]==arr[right-1]){
        right++
    }
    else{
        arr[left]=arr[right];
        left++;
        right++;
    }
}
console.log(arr.slice(0,left));