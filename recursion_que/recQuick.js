//quick sort
let arr = [8,2,5,6,2,1];
let high = arr.length-1;
let low = 0;

//quicksort(arr,low,high);
//console.log(arr);

function quicksort(arr,low,high){
    if(low < high){
        let pidx = partition(arr,low,high);

        quicksort(arr,low,pidx-1);
        quicksort(arr,pidx+1,high);
    }
}

//[8,2,5,6,2,1]
function partition(arr,low,high){
    let pivot = arr[high];
    let i = low-1

    for(let j=low;j<high;j++){
        if(arr[j] < pivot){
            i++;

            let temp = arr[i]; 
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    i++;
    let temp = arr[i];
    arr[i] = pivot;//pivot = arr[high]
    arr[high] = temp;
    return i;
}


// while(l<r){
//     let sum = arr[l]+arr[r];
//     if(sum==target){
//         return true;
//     }
//     else if(sum>target){
//         r--
//     }else{
//         l++;
//     }
// }
//return false;

let obj = {
    0:0,
    1:0
}
let nums = [0,1,0,1,0,1,0,1];
for(let x of nums){
    obj[x] = obj[x]+1
}

let a = new Array(obj[0]).fill(0);
let b = new Array(obj[1]).fill(1);
let ans =[...a,...b];
console.log(ans)
let separate = [0,0,2,1,1,0,2,1,0]