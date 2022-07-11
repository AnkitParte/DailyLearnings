function quickSort(array){
    if(array.length<=1){
        return array;
    }

    var pivot=  array[array.length-1];

    var leftArr=[];
    var rightArr=[];

    for(let el of array.slice(0,array.length-1)){
        (el<pivot) ? leftArr.push(el) : rightArr.push(el) ;
    }

    return [...quickSort(leftArr),pivot,...quickSort(rightArr)];
}

let arr = [1,9,8,7,6,5,4,3,2];
arr = quickSort(arr);
console.log(arr)