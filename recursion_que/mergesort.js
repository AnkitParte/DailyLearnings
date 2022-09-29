
let arr = [5,4,3,2,1],n=arr.length-1;
mergeSort(arr,0,n);
console.log(arr);

function mergeSort(arr,si,ei){
    if(si >= ei){
        return;
    }
    
    let mid = si + Math.floor((ei-si)/2);
    mergeSort(arr,si,mid);
    mergeSort(arr,mid+1,ei);
    merging(arr,si,mid,ei);
}

function merging(arr,si,mid,ei){
    let mergedArr = new Array(ei-si+1).fill(0);
    let idx1 = si;
    let idx2 = mid+1;
    let x = 0;

    while(idx1 <= mid && idx2 <= ei){
        if(arr[idx1] <= arr[idx2]){
            mergedArr[x++] = arr[idx1++]; 
        }else{
            mergedArr[x++] = arr[idx2++];
        }
    }

    while(idx1<=mid){
        mergedArr[x++] = arr[idx1++]
    }
    while(idx2<=ei){
        mergedArr[x++] = arr[idx2++]
    }
    for(let i=0,j=si; i<mergedArr.length;j++,i++){
        arr[j] = mergedArr[i];
    }
}