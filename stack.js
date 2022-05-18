//var stack=[];

//push
//pop
//peek

class Stack{
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    push(element){
        this.size++;
        this.storage[this.size]=element;
    }

    pop(){
        //let removed= this.storage[this.size];
        
        delete this.storage[this.size];
        this.size--
        //return removed;
    }

    peek(){
        return this.storage[this.size];
    }
}

let stack = new Stack();

stack.push("one");
stack.push("two");
stack.push("three");

console.log(stack)

stack.pop()

console.log(stack)

//stack.peek();
//console.log(typeof null)