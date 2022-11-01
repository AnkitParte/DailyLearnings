//quick sort

let arr = [8,5,9,13,-1,2,0];
let low = 0;
let high = arr.length - 1;

function quicksort(arr,low,high){
    if(low<high){
        let idx = partition(arr,low,high);

        quicksort(arr,low,idx-1)
        quicksort(arr,idx+1,high);
    }
}

function partition(arr,low,high){
    let pivot = arr[high];
    let i = low - 1;
    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            i++;

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    i++

    let temp = arr[i];
    arr[i] = arr[high];
    arr[high] = temp;

    return i;
}

quicksort(arr,low,high);

console.log("quick sorted array is : ",arr.join(" "));