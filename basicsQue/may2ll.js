//linked list

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below
//var node;
let current;
let prev;



function insertNodeAtHead(head, data) {
    //console.log(head,data);
    var ans="";
    
    if(!head){
        current = new LinkedListNode(data);
    }
    else{
        
        current= new LinkedListNode(data);
        current.next=prev;
    }
    prev=current;
    while(current){
        //console.log(current.data);
        ans+=" "+current.data;
        current=current.next;
    }
    //console.log(head,data);
    console.log(ans)
}
insertNodeAtHead(null,1);
insertNodeAtHead(1,2);
insertNodeAtHead(2,3);




// var n1 = new LinkedListNode(1);

// var n2 = new LinkedListNode(2,n1);

// var n3 = new LinkedListNode(3,n2)

// console.log(n3.value);



