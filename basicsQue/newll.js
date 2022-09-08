const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

var n=10;

let arr = [-1,-2,-3,-4]
let head,prev,node;
let i=0;
while(i<arr.length){

    node = new LinkedListNode(arr[i])

    if(head == undefined){
        head = node; //-1 
        prev = head;
    }
    else{
        prev.next = node;
        prev = node;
    }
    i++
}
//console.log(head)

var j=0;
node = new LinkedListNode(-111);
node.next = head;
// head = node
console.log(head);
