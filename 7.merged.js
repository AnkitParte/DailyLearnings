var nums1=[1,2,3,0,0,0]
var nums2=[2,5,6]

var arr=[];
for (let el of nums1){
    (el == 0) ? arr : arr.push(el);
}

//console.log(arr);
var array=[...arr,...nums2];
//console.log(array)

for(let i=0;i<array.length-1;i++){
    for(let j=0;j<array.length;j++){
        if(array[j]>array[j+1]){
            [array[j],array[j+1]]=[array[j+1],array[j]];
        }
    }
}

console.log(array);

