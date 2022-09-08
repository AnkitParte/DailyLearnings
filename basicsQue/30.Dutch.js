

let arr = [2,0,1]

let mid = 0,low=0,high=arr.length-1;

while(mid<=high){
    
    if(arr[mid]==0){
        [arr[low],arr[mid]]=[arr[mid],arr[low]];
        low++
        mid++
    }
    else if(arr[mid]==2){
        [arr[mid],arr[high]]=[arr[high],arr[mid]];
        high--;
    }else{
        mid++;
    }
}
console.log(arr);