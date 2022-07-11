let str = "abc";

//this function will going to print all powerset of an string
function powerset(str,idx,curr){
    if(idx == str.length){
        console.log(curr)
        return;
    }

    
    powerset(str,idx+1,curr)
    powerset(str,idx+1,curr+str[idx])
    
}

powerset(str,0,"");