
//let pushAr = [1,2,3,4,5]
//let popAr = [4,5,3,2,1]


// let pushAr = [1,2,3,4,5]
// let popAr = [4,3,5,1,2]

// let pushAr = [4,1,5,3,2]
// let popAr = [3,4,1,2,5]

let pushAr = [2,1]
let popAr = [1,2]

let stk = [];

let i=0,point=0;
while(i<pushAr.length){

    if(stk.length){
        if(stk[stk.length-1]==popAr[point]){
            console.log(popAr[point])
            point++
            stk.pop();
        }else{
            stk.push(pushAr[i])
            i++
        }
    }else{
        stk.push(pushAr[i])
        i++
    }
}
let j=stk.length-1;

while(j>=0){
    if(stk[j]==popAr[point]){
        console.log(popAr[point])
        point++
        j--
    }else{
        console.log(0)
        return
    }
}
console.log(1)