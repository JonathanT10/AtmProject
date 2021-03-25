//const  identification  = require("./account");
const atm = require("./atm")
let prompt = require("prompt-sync")();
//const money = require("./atm")
console.log(atm);
// pin = atm.validate;
// current = atm.balance;
// newLess = atm.withdraw;
// newMore = atm.deposite;
//cred = atm.identification[2];
const { accountInfo, balance, withdraw, deposite, validate } = atm;
const {money, identification} = accountInfo;
// console.log(identification);
//console.log(money);

// let balance = current(money);
// let withdraw = newLess(money);
// let depostie = newMore(money);
// let verification = pin(identification);
//console.log(verification);



function userMenu(){
    validate(identification);

}






