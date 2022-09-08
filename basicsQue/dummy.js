function trav(N,arr){
    for(let i=0;i<N;i++){
        console.log(arr[i]);
    }
}

function arrT(arr,idx){
    if(idx==arr.length){
        return;
    }
    console.log(arr[idx])
    arrT(arr,idx+1);
}

function fib(n){
    if(n===0){
       return 0;
    }
    else if(n==1 || n==2){
        return 1;
    }
    else{
        return (fib(n-1) + fib(n-2));

    }
}

console.log(fib(9));
// 0 1 1 2 3 5 8 13 21 34