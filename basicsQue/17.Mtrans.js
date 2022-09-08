
let matrix= [[1,2,3],
             [4,5,6]]

let mat = [];
let N=matrix.length;
let M=matrix[0].length;    
for(let j=0;j<M;j++){
    let arr=[];
    for(let i=0;i<N;i++){
        arr.push(matrix[i][j])
    }
    mat.push(arr);
}
    
console.log(mat);