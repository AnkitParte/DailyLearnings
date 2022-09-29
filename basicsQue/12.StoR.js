s="IX";
    
var obj={
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
}

var res=0;
var prev=0;

 //res=obj[s[0]];

for(let i=0;i<s.length;i++){
    if(obj[s[i]]<obj[s[i+1]]){
        res+=obj[s[i+1]]-obj[s[i]]
        i++;
    }
    else if(res<obj[s[i]]){
        res=obj[s[i]]-res;
    }
    else{
        res+=obj[s[i]];
    }
}
//console.log(res);
console.log(res);