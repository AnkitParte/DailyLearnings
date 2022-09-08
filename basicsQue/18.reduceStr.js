let str="abbabaadcbbc";

let stk=[];

for(let i=0;i<str.length;i++){
    let top=stk.length-1;
    if(stk[top]==str[i])
        stk.pop();
    else
        stk.push(str[i]);
}
console.log(stk.join(""));