// selection sort

let arr = [8,5,9,13,-1,2,0];
let n = arr.length;

for(let i=0;i<n-1;i++){
    let sm = i;
    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[sm]){
            sm = j;
        }
    }
    //i=0 sm=0 -> sm=4 [-1,5,9,13,8,2,0]
    //i=1 sm=1 -> sm=6 [-1,0,9,13,8,2,5]
    //i=2 sm=2 -> sm=5 [-1,0,2,13,8,9,5]
    //i=3 sm=3 -> sm=6 [-1,0,2,5,8,9,13] 
    //i=4 sm=4 -> sm=4 [-1,0,2,5,8,9,13]
    //i=5 sm=5 -> sm=5 [-1,0,2,5,8,9,13]
    //i=6 sm=6 -> sm=6 [-1,0,2,5,8,9,13]
    let temp = arr[sm];
    arr[sm] = arr[i];
    arr[i] = temp;
    console.log(`Iteration ${i+1} : `,arr.join(' '))
}

console.log("sorted array is : ",arr.join(" "));