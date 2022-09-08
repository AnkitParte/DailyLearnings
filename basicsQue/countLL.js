const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

var n=10;

let arr = [-1,-2,-3,-4,-5,6,7,8,9]
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
//console.log(head.next);
function getcount(head){
    if(head==null){
        return 0;
    }
    else{
        return 1+getcount(head.next);
    }
}
let count = getcount(head);
console.log(count);