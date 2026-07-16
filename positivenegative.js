const prompt = require("prompt-sync")(); 

let num = Number(prompt("Enter a Number: "));

if(num > 0){
    console.log("positive Number");
}else if(num < 0){
     console.log("Negative Number");
}else{
    console.log("zero");
}

