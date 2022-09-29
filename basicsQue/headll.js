const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var prev;
function insertNodeAtHead(head, data) {
     
    if(!head){
        head = new LinkedListNode(data);
       
    }
    else{
        head = new LinkedListNode(data);
        head.next = prev;

        

    }
    prev = head;

    return head;


}
insertNodeAtHead(null,1)
insertNodeAtHead(1,2)

console.log(insertNodeAtHead(2,3));


