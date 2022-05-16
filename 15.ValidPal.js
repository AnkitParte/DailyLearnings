
var s= "1b1";

var str="";
if(s.length==1){
    console.log(true);
}
for(let i=0;i<s.length;i++){
    var N=s[i].charCodeAt()
    if(N>=97 && N<=122 ||  N>=65 && N<=90 || N>=48 && N<=57){
    
        str+=s[i];
    
    }
}
str=str.toLowerCase();
console.log(str);
var l=0;
var r=str.length-1;
while(l<=r){
    if(str[l] != str[r]){
        console.log(false);
    }
    l++;
    r--;
}
console.log(true);