
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below
let curr;
let prev;
function insertNodeAtTail(head, data) {
    var node = new LinkedListNode(data);
    

    if(!head){
        prev = node;
        return prev;
    }
    else{
        curr = prev;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = node
        
        
        return prev;
        
    }
    
    
    
    
}

insertNodeAtTail(null,1)


insertNodeAtTail(1,2)
//console.log(prev);

console.log(insertNodeAtTail(2,3));

