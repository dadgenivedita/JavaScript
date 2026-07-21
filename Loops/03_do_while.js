const prompt = require("prompt-sync")(); 

let i = parseInt(prompt("Enter a Number : "));

do{
    console.log(i);
    i++;
}while(i <= 5);