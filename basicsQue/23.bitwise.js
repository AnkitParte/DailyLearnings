//console.log(1^4);
let arr = [1,2,2,3,4];

// let comm = 0;
// for(let i=0;i<arr.length;i++){
//     comm = comm ^ arr[i];
// }
// console.log(comm);

let array = [1,2,3,4]
arr.concat(array)
let ans = 0;
for(let i=0;i<arr.length;i++){
    ans = ans^arr[i]^(i);
    // 1
}

console.log(ans)
