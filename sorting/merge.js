//merge sort

let arr = [8,5,9,13,-1,2,0];
let low = 0;
let high = arr.length - 1;
mergesort(arr,low,high);
console.log("merge sorted array is : ",arr.join(" "))

function mergesort(arr,low,high){
    if(low>=high){
        return;
    }

    let mid = low + Math.floor((high-low)/2);

    mergesort(arr,low,mid);
    mergesort(arr,mid+1,high);
    merging(arr,low,mid,high);
}

function merging(arr,low,mid,high){
    let mergeArr = new Array(high-low+1).fill(0);
    let idx1 = low
    let idx2 = mid+1;
    let x = 0;

    while(idx1<=mid && idx2<=high){
        if(arr[idx1]<=arr[idx2]){
            mergeArr[x++] = arr[idx1++]
        }else{
            mergeArr[x++] = arr[idx2++];
        }
    }
    while(idx1<=mid){
        mergeArr[x++] = arr[idx1++]
    }
    while(idx2<=high){
        mergeArr[x++] = arr[idx2++];
    }

    for(let i=0,j=low;i<mergeArr.length;i++,j++){
        arr[j] = mergeArr[i];
    }
}