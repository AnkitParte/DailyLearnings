
//Maximum occuring character

let ans = new Array(26).fill(0);

let str = "aabrakadabraa";

for(let i=0;i<str.length;i++){
    let char = str[i].charCodeAt();
    if(char >=97 && char<=122){
        ans[char-97]++
    }
}
let max = -1,idx=-1;
for(let i=0;i<ans.length;i++){
    if(ans[i]>max){
        idx=i;
        max = ans[i]
    }
    
}
//console.log(max)
console.log(String.fromCharCode(97+idx));

