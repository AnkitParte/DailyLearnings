
function mergesort(arr,l,r){

    if(l==r) return;

    let mid = Math.floor((l+r)/2)
    mergesort(arr,l,mid)
    mergesort(arr,mid,r)
    //merge(arr,l,mid,r)
}

function merge(arr,l,mid,r){
    let left = arr.slice(l,mid+1)
    let right = arr.slice(mid+1,r+1);
    let s1 = 0,s2=0,get=l
    while(s1 < left.length && s2 < right.length){
        if(left[s1] < right[s2]){
            arr[get]=left[s1];
            s1++
        }else{
            arr[get]=left[s2];
            s2++
        }
        get++;
    }
    while(s1 <left.length){
        arr[get]=left[s1];
        get++;
    }
    while(s2 <right.length){
        arr[get]=right[s2];
        get++;
    }
    
}

let arr = [5,4,1,2,3,6,8]
let left = arr.slice(0,3);
let right = arr.slice(3)

mergesort(arr,0,arr.length-1)
console.log(arr);