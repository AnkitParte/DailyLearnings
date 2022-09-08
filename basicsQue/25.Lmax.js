

let arr = [1,2];
arr = [1,3,2,4,3,5,4];
let temp =[];
// 2 
for(let i=1;i<arr.length-1;i++){
    if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
        temp.push(arr[i]);
    }
}
if(temp.length){
    console.log(temp.length)
}
else{
    console.log(-1);
}