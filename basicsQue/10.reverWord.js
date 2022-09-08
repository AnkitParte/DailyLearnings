var S = 'i.like.this.program.very.much'
S="."+S;
var l=S.length;
let check=l;
let str=""

while(l>=0){
    if(S[l]=="."){
        for(let i=l+1;i<check;i++){
            str+=S[i];
        }
        (l==0) ? str : str+=".";
        check=l;
    }
    l--;
}
console.log(str);