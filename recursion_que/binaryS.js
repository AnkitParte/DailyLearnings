let arr = [1,2,7,8,10,11,12]
let key = 7;

//binary search using iteration
function binaryS(arr,key){
    let left =0,right=arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid]==key){
            return mid;
        }else if(arr[mid]<key){
            left=mid+1
        }else if(arr[mid]>key){
            right = mid-1;
        }
    }
    return -1;
}

//binary search using recursion 
function binarySrec(arr,low,high,key){
    if(low>high) return false;
    let mid = Math.floor((low+high)/2);

    if(arr[mid]==key) return true;

    if(arr[mid]<key){
        return binarySrec(arr,mid+1,high,key);
    }
    return binarySrec(arr,low,mid-1,key);
}

//console.log(binaryS(arr,key));
console.log(binarySrec(arr,0,arr.length-1,key));