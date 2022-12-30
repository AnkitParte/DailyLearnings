//Given an array which can be consist of integers and ans array of array your task is 
//to flat all these element into a single array.

let topArr = [
    1,[2,3,4,5],
    [[6,7,8,9],[10,11,12,13],[14,15,16,17],[[18,19,20],[21,22,23],[24,25],26]]
];
let ans = [];
function solver(arr,idx){
    if(idx==arr.length){
        return;
    }
    for(let i=idx;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            solver(arr[i],0);
        }else{
            ans.push(arr[i]);
        }
    }
}
solver(topArr,0);
console.log(ans.join(" "));