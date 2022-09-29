
let str = "abc";

function permute(str,curr){
    if(str.length == 0){
        console.log(curr);
        return;
    }
    for(let i=0;i<str.length;i++){
        let one= str.slice(0,i)+str.slice(i+1);
        permute(one,curr+str[i])
    }
}

permute(str,"")