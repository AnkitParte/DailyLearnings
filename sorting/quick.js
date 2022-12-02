//quick sort

let arr = [8,5,9,13,-1,2,0];
let low = 0;
let high = arr.length - 1;

function quicksort(arr,low,high){
    if(low<high){
        let idx = partition(arr,low,high);//arr,0,arr.length-1 then idx=1
        /*sorting pivot(arr[high]) to its original sorted position
        and we will going to get real index(inside idx variable) of pivot then
        in nextline we will perform same operation before idx (means idx-1) and after idx (means idx+1);
        */
        quicksort(arr,low,idx-1)//arr,0,1-1 -> arr,0,0 no further going
        //here we will going to do the same operation of positioning arr[idx-1] to its sorted position 


        quicksort(arr,idx+1,high);//arr,1+1,arr.length-1 -> arr,2,6  
        //here we will going to do the same operation of positioning arr[high] to its sorted position
    }
}

function partition(arr,low,high){//[8,5,9,13,-1,2,0],[9,13,8,2,5]
    let pivot = arr[high];
    let i = low - 1;
    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            i++;//i=0

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;//[-1,5,9,13,8,2,0]
        }
    }
    i++//i=1

    let temp = arr[i];
    arr[i] = arr[high];
    arr[high] = temp;//[-1,0,9,13,8,2,5]

    return i;//1 , 
}

quicksort(arr,low,high);

console.log("quick sorted array is : ",arr.join(" "));