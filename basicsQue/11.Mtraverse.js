let arr=[
    [1,6,9],
    [2,7,8],
    [3,4,5]
]
var M=3,N=3;

var l=0;
var r=N-1;
var u=0;
var b=N-1;

var temp="";
var count=1;

while(count<=M*N){

    //if(count==M*N){break;};//

    for(let i=u;i<=b;i++ && count<=M*N){
        temp+=arr[i][l];
        count++;
    }
    l++;
    for(let i=l;i<=r;i++ && count<=M*N){
        temp+=arr[b][i];
        count++;
    }
    b--;

}
console.log(temp)
console.log(count);