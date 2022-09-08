// var Stack = () => { 
//     this.stack = [] 
//     this.top=0;
// };

// Stack.prototype.push = function(x){
//     this.top++;
//     this.stack.push(x);
// }
// Stack.prototype.pop = function() {
//     let removed=this.stack.pop();
//     this.top--;
//     return removed;
// }
// Stack.prototype.peek = function(){
//     return this.stack[top];
// }

// var arr=new Stack();

// arr.push(2)
// arr.push(4)
// arr.push(6)

// console.log(arr);



    
    var arr=[]
    var size=arr.length;
    var top=-1;

    function pop(){
        if(isEmpty()){
            console.log("stack underflow");
        }
        else{
            top--;
        }
    }
    function isEmpty(){
        if(top==-1){
            return true;
        }
        return false;
    }
    function push(x){
        if(isFull()){
            console.log("stack overflow");
        }
        else{
            top++;
            arr[top]=x;
        }
    }
    function isFull(){
        if(top==size-1){
            return true;
        }
        return false;
    }
    function peek(){
        if(isEmpty()){
            console.log("stack is empty");
        }
        else{
            console.log(arr[top]);
        }
    }

    push(3)
    push(4)
    push(7);