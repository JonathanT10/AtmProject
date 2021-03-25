// const account = require("./account")
const money = require("./account")
const identification = require("./account")
let prompt = require("prompt-sync")();

console.log(money);
console.log(identification);


function getBalance(money){
    console.log("Your current balance is: $" + money)
}

function withdraw(money){
    let userInput = prompt("How much would you like to withdraw?");
    let numbers = /^[0-9]+$/;
    while(userInput == numbers){
        userInput = prompt("How much would you like to withdraw?");
    }
    money = money - userInput;
    console.log("Your new balance is: $" + money);
}


function deposite(money){
    let userInput = prompt("How much would you like to deposite?");

    money = money + userInput;
    console.log("Your new balance is: $" + money);

}

function validatePin(identification){
    userInput = prompt("Enter your pin:");
   if(userInput === identification){
    console.log("Welcome!");
   } 
   else {
       while(userInput != identification){
           userInput = prompt("Enter your pin:");
       }
   }
}
module.exports.accountInfo = identification;
module.exports.balance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposite = deposite;
module.exports.validate = validatePin;
//console.log(module);


