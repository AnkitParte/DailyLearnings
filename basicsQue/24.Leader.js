let arr= [5,1,2,4,3];
if(arr.length == 0){
    return [0]
}
let i= arr.length-1;
let max = -1;
let cunt = [];
while(i>=0){
    if(arr[i] >= max){
        cunt.push(arr[i]);
        max = arr[i];
    }
    i--
}
console.log(cunt.reverse());