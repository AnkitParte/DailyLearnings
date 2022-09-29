let arr = [1,1,2,2,2,3,4,3,3];
let ans = new Set(arr);
//console.log(ans.size);
let sum=0;
// for(let a of ans){
//     console.log(a);
// }
for(let x of ans){
    sum+=x;
}
//console.log(sum);
const iterator = ans.values();
//console.log(iterator.next().value);
//console.log(iterator.next().value);
console.log(ans.size === 4);
