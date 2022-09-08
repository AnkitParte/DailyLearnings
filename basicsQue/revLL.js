const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

var curr;
var prev=null;
var fut;

function reverse(head) {
    curr = new LinkedListNode(head);

    if(prev===null){
        curr.next = prev
        prev = curr
    }
    else{
        curr.next=prev
        prev = curr;
    }

    return prev.data;



}

reverse(1)
reverse(2)
reverse(3)
console.log(reverse(4));
//console.log(reverse(5))

/*
if(prev===null){
        curr.next = prev
        prev = curr
    }
    else{
        fut = prev;
        
        while(prev.next){
        prev=prev.next;
        }
        prev=curr;
        
        prev = fut;
    }
*/
