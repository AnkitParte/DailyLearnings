//Kadane's algorithm
var arr=[-2,1,-3,4,-1,2,1,-5,4];

var curSum=0;
var maxSum=0;
var minSum=-Infinity;

for(let i=0;i<arr.length;i++){
    curSum=curSum+arr[i];
    if(curSum>maxSum){
        maxSum=curSum;
    }
    if(curSum>minSum){
        minSum=curSum;
    }
    if(curSum<0){
        curSum=0;
    }
}
if(maxSum==0){
    console.log(minSum);
}
else{
    console.log(maxSum)
}
