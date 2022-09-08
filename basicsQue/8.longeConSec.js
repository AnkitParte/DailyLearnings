var nums=[0,3,7,2,5,8,4,6,0,1]

var v=Math.max(...nums);

var arr= new Array(v);

for (let i=0;i<nums.length;i++){
    arr[nums[i]]=-1;
}
var max=-Infinity;
var count=0;

for(let el of arr){
    (el== -1) ? count++ : count=0 ;
    
    (count>max) ? max=count : max ;
    
}
console.log(max)