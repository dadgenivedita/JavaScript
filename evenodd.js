const prompt = require("prompt-sync")(); 

let num = Number(prompt("Enter First Number: "));

if(num % 2 == 0){
    console.log("Even Number");
}else{
     console.log("Odd Number");
}

