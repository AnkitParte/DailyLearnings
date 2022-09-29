var find132pattern = function(nums) {

    var N=nums.length;
    for(let i=1;i<N-1;i++){
        var S=nums[i];
        var min=S;
        var max=-Infinity;
        
        //this code will not work when there is an negative require
        
        for(var j=0;j<i;j++){
                if(nums[j]<min){
                    min=nums[j];
                    
                }
        }
        
        for(let k=i+1;k<N;k++){
           if(nums[k]>min && nums[k]<S){
                    max=nums[k];
               
            } 
        }
        //console.log(`min ${min} , S ${S} , max ${max}`);
        if(min<S && max>min){
            return true;
        }
    }
    return false;
};

var nums=[3,1,4,2]
console.log(find132pattern(nums));
