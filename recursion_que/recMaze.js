//maze runner

let m=3,n=3;

function maze(i,j,m,n){
    if(i==m || j==n){
        return 0;
    }
    if(i==m-1 && j==n-1){
        return 1;
    }

    return maze(i+1,j,m,n) + maze(i,j+1,m,n);
}
console.log(maze(0,0,m,n));