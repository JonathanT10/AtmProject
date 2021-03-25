// const account = require("./account")
const money = require("./account")
const identification = require("./account")
const isNumber = require("is-number");
let prompt = require("prompt-sync")();

console.log(money);
console.log(identification);

function getBalance(money){
    console.log("Your balance is: $" + money);
}
function withdraw(money){
    let userInput = prompt("How much would you like to withdraw?","0");
    let moneyInput = parseInt(userInput);
    let number = isNumber(moneyInput);
    while(moneyInput >= money || number === false){
        userInput = prompt("You do not have the necessary funds, or you did not enter a number. \nHow much would you like to withdraw?","0");
        moneyInput = parseInt(userInput);
        number = isNumber(moneyInput);
    }
    money = (money) - (moneyInput);
    console.log("Your new balance is: $"+ money);
    return money;
}
 

function deposite(money){
    let userInput = prompt("How much would you like to deposite?","0");
    let moneyInput = parseInt(userInput);
    while(moneyInput <= 0){
        userInput = prompt("How much would you like to deposite?","0");
        moneyInput = parseInt(userInput);
    }
    money = (money) + (moneyInput);
    console.log("Your new balance is: $" + money);
    return money;
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


function numbersRequired(input){
  if(isNumber(input)){;
        return true;
    }
    else{
        return false;
    }
}

module.exports.accountInfo = identification;
module.exports.balance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposite = deposite;
module.exports.validate = validatePin;
//console.log(module);


