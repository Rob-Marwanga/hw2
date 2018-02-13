// To execute this code, be sure you're in the right directory;
// (Mac)       cd ~/code/hw2
// (Windows)   cd c:\code\hw2
// Then type:
// node hw2.js

// HOMEWORK 2

// Cryptocurrency is all the rage. You have decided to create your own,
// KelloggCoin, that will massively disrupt financial markets at the Global
// Hub.

let blockchain = [
  { fromUser: null, toUser: "brian", amount: 21000 },
  { fromUser: "brian", toUser: "ben", amount: 9000 },
  { fromUser: "brian", toUser: "jeff", amount: 7000 },
  { fromUser: "ben", toUser: "jeff", amount: 400 },
  { fromUser: "brian", toUser: "jeff", amount: 1500 },
  { fromUser: "jeff", toUser: "brian", amount: 4500 },
  { fromUser: "jeff", toUser: "ben", amount: 1750 }
]

// Write a function that, when given a username (i.e. brian, ben, or jeff),
// returns the number of KelloggCoin that user has in their KelloggCoin "wallet".

// HINT! You will have to use all the JavaScript programming fundamentals we've
// learned about so far, i.e. variables, arrays, objects, conditionals, loops,
// and functions, to complete this task. There are ways to do this using some
// more advanced array functions, and by all means, experiment with this, but
// get it done using just the basics first.

// It should print out:
// Brian's KelloggCoin balance is 8000
// Ben's KelloggCoin balance is 10350
// Jeff's KelloggCoin balance is 2650

class Blockchain {
  constructor(fromUser, toUser, amount) {
    this.fromUser = fromUser;
    this.toUser = toUser;
    this.amount= amount;
  }
}

  let brian= new Blockchain(null,"brian",(blockchain[0].amount-blockchain[1].amount-blockchain[2].amount-blockchain[4].amount+blockchain[5].amount))
  let ben= new Blockchain(null,"ben",(blockchain[1].amount-blockchain[3].amount+blockchain[6].amount))
  let jeff= new Blockchain(null,"jeff",(blockchain[2].amount+blockchain[3].amount+blockchain[4].amount-blockchain[5].amount-blockchain[6].amount))

  getBalance= function(firstName) {
    return brian.amount
  }

  getBalance1= function(firstName) {
    return ben.amount
  }

  getBalance2= function(firstName) {
    return jeff.amount
  }

console.log("Brian's KelloggCoin balance is "+ getBalance("brian"));
console.log("Ben's KelloggCoin balance is " + getBalance1("ben"));
console.log("Jeff's KelloggCoin balance is " + getBalance2("jeff"));
