//bubble sort
/*
in bubble sort we will going find the element which are lesser than our current element and after finding
them we will going to swap them with out current element cause of which we can arrange an element to 
its original position. 
*/
let arr = [2,1,0,-1,8,6];
let n = arr.length;

for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(arr[i]>arr[j]){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp;
        }
    }
    // -1 2 1 0 8 6
    // -1 0 2 1 8 6
    // -1 0 1 2 8 6
    // -1 0 1 2 8 6
    // -1 0 1 2 6 8 
    // -1 0 1 2 6 8
    console.log(`Iteration ${i+1} : `,arr.join(" "))
}

console.log("sorted array is : ",arr.join(' '))