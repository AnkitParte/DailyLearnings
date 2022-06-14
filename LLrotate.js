const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var size=3 ,k=2;
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

//console.log(head);
//the above code is to create a head


var rotateRight = function(head, k) {

var curr = head;
var curr2=head;
var curr3 = head


var count=1;
while(curr.next){
    curr=curr.next;
    count++;
}

// 1 2 3 k=2

if(count==1){
    console.log (head);
    
}
if(k>count){
    k=k%count;
}
var i=1;
//var z = curr2;
while(i<=k){
    var x ,z=curr2;
    while(z){
        x=z;
        z=z.next;
    }
    //console.log(x);
    var j=1
    var y=curr3,s;
    while(j<count){
        s=y;
        y=y.next;
        j++
    }
    s.next = null
    x.next = curr3
    i++;
    curr2 = x;
    curr3 = x;
}
console.log(x);


}

rotateRight(head,k)

