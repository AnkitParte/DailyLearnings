
let str = "abc";
let count = 0;

function strPerm(str,ans){
    if(str.length == 1){
        console.log(ans+str);
        count++;
        return;
    }
    for(let i=0;i<str.length;i++){
        let curr = str[i];
        let one = str.slice(0,i) + str.slice(i+1);
        
        strPerm(one,ans+curr);
        
    }
}

strPerm(str,"");
console.log(count);