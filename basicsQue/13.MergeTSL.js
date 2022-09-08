
var list1 = [1,2,4]
var list2 = [1,3,4];

for(let i=0;i<list2.length;i++){
    list1.push(list2[i]);
}
const list=list1.slice();
for(let i=0;i<list.length-1;i++){
    for(let j=0;j<list.length;j++){
        if(list[j]>list[j+1]){
            [list[j],list[j+1]]=[list[j+1],list[j]];
        }
    }
}
console.log(list);

console.log(list1);