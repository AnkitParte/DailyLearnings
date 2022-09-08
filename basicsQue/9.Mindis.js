var S=["geeks", "for", "geeks","practice","practice"];
var r=Infinity;
var l=0;
var word="geeks"
var word2="practice";
var i=0;

while(i<S.length && l<r){
    if(S[i]==word && i>l){l=i}

    if(S[i]==word2 && i<r){r=i};

    i++;
}
// while(i<S.length){
//     if(S[i]==word2){r=i};
// }

console.log(r-l);