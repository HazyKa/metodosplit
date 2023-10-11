let string = "Logo vou ir fazer um cafe";

let stringArr = string.split(" ");

function menor(){

    let palavraMenor = stringArr[0];

    for(let i = 0; i < stringArr.length; i++){
        if(stringArr[i].length < palavraMenor.length){
            palavraMenor = stringArr[i];
        }
     }

     console.log(palavraMenor);

}

menor();