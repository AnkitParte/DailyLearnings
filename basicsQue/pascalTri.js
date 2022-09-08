//pascal triangle I

function pascal(N){
    var array=[];

    for(let i=0;i<N;i++){
        var subarr=[];
        for(let j=0;j<=i;j++){
            if(j==0 || j==i){
                subarr.push(1);
            }
            else{
                subarr.push(array[i-1][j-1]+array[i-1][j]);
            }
        }
        array.push(subarr);
    }

    //return array;
    return(array);
}

var noir=pascal(5);

console.log(noir);