//occurence of an element

let key=3;

let f=-1,l=-1;
let arr = [1,2,3,3,3,4,5]
//         0 1 2 3 4 5 6
let si=0,ei=arr.length-1;
let mid = si + Math.floor((ei-si)/2)

while(si<=ei){
    
    if(arr[mid]==key){
        f = mid;
        ei = mid-1
    }else if(key>arr[mid]){
        si = mid+1
    }else if(key<arr[mid]){
        ei = mid-1;
    }
    mid = si + Math.floor((ei-si)/2)
}

si=0,ei=arr.length-1;
mid = si + Math.floor((ei-si)/2)
while(si<=ei){
    
    if(arr[mid]==key){
        l = mid
        si = mid+1;
    }else if(key>arr[mid]){
        si = mid+1
    }else if(key<arr[mid]){
        ei = mid-1;
    }
    mid = si + Math.floor((ei-si)/2)
}

console.log(`this first occurence of ${key} is ${f} ans last is ${l}`)
console.log(`number of ${key} is ${l-f+1}`)
