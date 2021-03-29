//const  identification  = require("./account");
const atm = require("./atm")
let prompt = require("prompt-sync")();
//const money = require("./atm")
//console.log(atm);
// pin = atm.validate;
// current = atm.balance;
// newLess = atm.withdraw;
// newMore = atm.deposite;
//cred = atm.identification[2];
const { accountInfo, balance, withdraw, deposite, validate } = atm;
const {money, identification} = accountInfo;
let exit = require("exit");
const { monitorEventLoopDelay } = require("node:perf_hooks");
// console.log(identification);
//console.log(money);

// let balance = current(money);
// let withdraw = newLess(money);
// let depostie = newMore(money);
// let verification = pin(identification);
//console.log(verification);

console.log("Welcom to the ATM!")
validate(identification);
userMenu(money);

function userMenu(money){
    
    userSelection(money);
//     balance(money);
//   money = withdraw(money);
//   money = deposite(money);

}return money;


function userSelection(money){
    let menuOptions = prompt("Please enter the number of your selection: \n1. Balance \n2. Withdraw \n3. Deposite \n4. Exit    ");

    do{
        switch(menuOptions){
            case "1":
                balance(money);
                userMenu(money);
            break;
            case "2":
                money = withdraw(money);
                userMenu(money);
            break;
            case "3":
               money = deposite(money);
                userMenu(money);
            break;
            case "4":
                console.log("Thank you for Banking with us today!")
                exit();
                validate(identification);
                userMenu(money);
            break;
        }
    }while(menuOptions != "1" || menuOptions != "2" || menuOptions != "3" || menuOptions != "4");
    return money;
} return money;




   

module.exports.money = availableCash;


