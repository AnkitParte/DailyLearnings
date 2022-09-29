var head=[1,1,2];
var one=[0];
    
for(let i=0;i<head.length;i++){
     //? one.push(head[i]) : one ;
    if(one[one.length-1] != head[i]){
        one.push(head[i]);
    }
    else{
        continue;
    }
}
one.shift();
console.log(one);