const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var size=5;
var i=1;
var head;
var prev;
var temp;
while(i<=size){
    var node = new LinkedListNode(i);

    if(head===undefined){
        head = node;
        prev = head;
    }
    else{
        while(prev){
            temp = prev;
            prev = prev.next;
        }
        
        temp.next = node;
        
    }
    prev = head;
    i++;

}
console.log(head)
var count=0;
while(head){
    head=head.next;
    count++;
}
console.log(count);

//console.log(head)

var reverseList = function(head) {
    var curr = head;
    var x,node ;
    
    while(curr){
        node = new LinkedListNode(curr.data);
        if(x==undefined){
            x = node;
        }
        else{
            node.next = x ;
            x = node;
        }
        
        
        

        curr = curr.next;
    }
    
    return x;
    
    
    
};
//reverseList(head)
//console.log(reverseList(head));







