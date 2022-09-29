let str = "racecar";
let str2 = "raceecar";

function rStr(str,l,r){
    if(l>=r){
        return true;
    }
    if(str[l] !== str[r]){
        return false;
    }

    return rStr(str,l+1,r-1)
}

let ans = rStr(str2,0,str2.length-1);
(ans) ? console.log("palindrome") : console.log("notPalindrome")