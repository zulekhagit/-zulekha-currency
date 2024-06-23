#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //base currency
    EUR: 0.94,
    GBP: 0.80,
    INR: 83.68,
    PKR: 278.12
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Emter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    { name: "to",
        message: "Emter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from]; // exchange rate
let toAmount = currency[user_answer.to]; // exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // usd base currency
let convertedAmount = baseAmount * toAmount;
// console.log(fromamount);
//console.log(toamount);
//console.log(amount);
console.log(convertedAmount);
