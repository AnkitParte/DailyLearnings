var str = 'a5b3c2zc12'
var N=str.length;
var character="";
var i=0;
while(i<N){
    if(str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122){
        var j=i+1;
        //console.log(`count is ${j}`)

        var count=""

        while(j<N){
            if(str[j].charCodeAt()>=49 && str[j].charCodeAt()<=57){
                count=count+str[j];
            }
            else{

                break;
            }
            j++
        }


        if(count==""){
            //character=character+str[i];

            character+=str[i];


        }
        else{

            count=Number(count);
            character+=str[i].repeat(count);

        }

        //console.log(`count is ${count}`)
        i=j;

    }
    else{

        i++;

    }
    
}
console.log(character);