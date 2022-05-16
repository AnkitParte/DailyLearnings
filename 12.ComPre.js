
var strs=["a"]//["dog","racecar","car"]//[""]//["flower","flow","flight"]

var res="";
if(strs.length==1){
    res+=strs[0]
}
for(let i=0;i<strs.length-1;i++){
    res=twoPre(strs[i],strs[i+1])
    // if(res=""){
    //      console.log(res);
    //      break;
    // }
}
console.log(res) ;

function twoPre(a,b){
    var com="";
    var i=0;
    while ( a[i]==b[i] && i<Math.min(a.length,b.length)){
        com+=a[i];
        i++;
    }
    return com;
}