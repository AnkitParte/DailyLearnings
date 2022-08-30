//palindrome strings optimized version
let string = "racecar" ,si=0,ei=string.length-1

let ans = checkPalin(string,si,ei);
(ans)?console.log(`palindrome : ${ei-si+1}`):console.log("not palindrome")

function checkPalin(str,si,ei){
    while(si<ei){
        if(str[si++]!==str[ei--]){
            return false
        }
    }
    return true;
}
