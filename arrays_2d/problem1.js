//spiral traversal
let arr = [
    [1,14,13,12,11],
    [2,15,20,19,10],
    [3,16,17,18,9],
    [4,5,6,7,8]
]
let n = arr.length;

let minr=0;
let minc=0;
let maxr=n-1;
let maxc = arr[0].length-1;
let count = n*(maxc+1),check=0;
//console.log(count);

while(check<count){
    //left side
    for(let i=minr,j=minc;i<=maxr && check<count;i++){
        console.log(arr[i][j]);
        check++
    }
    minc++
    //bottom side
    for(let i=maxr,j=minc;j<=maxc && check<count;j++){
        console.log(arr[i][j])
        check++
    }
    maxr--
    //right side
    for(let i=maxr,j=maxc;i>=minr && check<count;i--){
        console.log(arr[i][j])
        check++
    }
    maxc--
    //top side
    for(let j=maxc,i=minr;j>=minc && check<count;j--){
        console.log(arr[i][j])
        check++
    }
    minr++

}