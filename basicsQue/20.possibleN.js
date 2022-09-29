let n=3;
let num=10**(n-1);
let end=10**(n)-1
//console.log(num,end);
var count=0;
while(num<end){
    var str=num+"";
    var s1=0,s2=0;
    for(let i=0;i<str.length;i++){
        if(i%2==0){
            s1+=(+str[i]);
        }
        else{
            s2+=(+str[i]);
        }
    }
    if(s1==s2){
        count++;
        console.log(num);
    }
    num++;
}
console.log(count);

