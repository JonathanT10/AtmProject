//const  identification  = require("./account");
const atm = require("./atm")
let prompt = require("prompt-sync")();
//const money = require("./atm")
console.log(atm);
pin = atm.validate;
current = atm.balance;
newLess = atm.withdraw;
//cred = atm.identification[2];
const { identification, balance, withdraw, deposite, validate } = atm;
const {money, cred} = identification;
console.log(cred);
//console.log(money);






function userMenu(){
    current(money);
    newLess(money);
    pin(identification);
//console.log(verification);
}


let mainMenu = userMenu(cred);



