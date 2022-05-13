var arr=[1,3,4,5,7,10,11]//[2,7,11,15]
var target=9;
var l=0;
var r=arr.length-1;

function twoSum(arr,target){
    var l=0;
    var r=arr.length-1;
    while(l<r){
        var T=arr[l]+arr[r]
        if(T==target){
            return ([l+1,r+1]);
        }
        else if(T<target){
            l++;
        }
        else{
            r--;
        }
    }
    return [0,0]
}

console.log(twoSum(arr,target));
