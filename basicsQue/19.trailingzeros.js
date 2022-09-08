let n=200;
let count=0;
// for(let i=n;i>=24;i--){
//     if(i%(5**2)==0){
//         //console.log(i); 
//         count++; 
//     } 
        
// }
let temp=0
while(n>=5){
    
    console.log(n);
    temp=Math.floor(n/5);
    n=Math.floor(n/5);
    count+=temp;

}
console.log(count);