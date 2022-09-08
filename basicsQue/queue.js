var ar=[1,2,3,4,5];
let a=ar.splice(0,1);
//console.log(ar);

var arr=[];
let front=0;
let rear=0;
function dequeue(){
    if(front>rear || front==rear){
        console.log("underflow")
    }
    else{
        front++
    }
}
function enqueue(x){
    arr.push(x)
    rear++;
}
function fifo(){
    return arr[front]
}
enqueue(2);
enqueue(3);
enqueue(4);
dequeue();
dequeue();
dequeue();
//console.log(fifo());