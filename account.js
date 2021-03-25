


let pin = 1234;
let balance = 100.00;
let prompt = require("prompt-sync")();



let confirmation = logIn(pin);
console.log("Your Balance is: $" + balance);
console.log("hello");


function logIn(confirm){
    userInput = prompt("Enter yor pin:");
   if(userInput === confirm){
   } 
   else {
       while(userInput != confirm){
           userInput = prompt("Enter yor pin:");
       }
   }
}




