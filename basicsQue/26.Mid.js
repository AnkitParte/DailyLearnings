// sum of middle elements of two sorted arrays

let ar1 = [1, 2, 4, 6, 10]
let ar2 = [4, 5, 6, 9, 12]
let n = 5;

let ans = new Array(2*n).fill(0);
let i=0;
let left=0,right=0;
while(left<n){
    
    if(ar1[left]<=ar2[right]){
        left++;
    }
    else if(ar1[left]==ar2[right]){
        left++;
        [ar1[left],ar2[right]] = [ar2[right],ar1[left]];
        right++;
    }
    else{
        [ar1[left],ar2[right]] = [ar2[right],ar1[left]];
    }

}
console.log(ar1);
console.log(ar2);