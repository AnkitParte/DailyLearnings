const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};


// Complete the function below

function insertNodeAtHead(head, data) {
    //console.log(!head,data)
    let node;
    if(!head){
        node = new LinkedListNode(data);
    }
    else{
        node = new LinkedListNode(data,head); 
    }
    return node;
}

//let ll= new LinkedListNode(1);
//insertNodeAtHead(null,2)
//ll.insertNodeAtHead(2);
//console.log(!null);
insertNodeAtHead(null,1)
insertNodeAtHead(2,1)
console.log(insertNodeAtHead(3,2));

