
let arr=[4,10,5,8,20,15,3,12]
// [-1,4,4,5,8,8,-1,3]
let stack=[];

let N=arr.length;

let i=0;

while(i<N){
    if(stack.length != 0){
        if(stack[stack.length-1]<arr[i]){

            let temp=arr[i];

            arr[i]=stack[stack.length-1];
            stack.push(temp);
            i++;
        }
        else{
            stack.pop();
        }
    }
    else{
        stack.push(arr[i]);
        arr[i]=-1;
        i++;
    }
}

console.log(arr.join(" "));