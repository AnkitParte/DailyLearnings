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
    let temp = arr[sm];
    arr[sm] = arr[i];
    arr[i] = temp;
    console.log(`Iteration ${i+1} : `,arr.join(' '))
}

console.log("sorted array is : ",arr.join(" "));