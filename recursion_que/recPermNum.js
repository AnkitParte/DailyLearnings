let arr = [1,2,3];

//do make permutation of array 

perm(arr,0,[])
function perm(arr,idx,temp){
    if(idx == arr.length){
        console.log(temp);
        return;
    }

    for(let i=idx;i<arr.length;i++){

        swap(arr,i,idx)
        perm(arr,idx+1,[...temp,arr[idx]])
        swap(arr,i,idx)
    }
}

function swap(arr,a,b){
    let temp = arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}