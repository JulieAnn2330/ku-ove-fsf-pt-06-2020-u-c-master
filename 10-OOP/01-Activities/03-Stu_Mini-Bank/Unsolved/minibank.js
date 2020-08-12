function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
  this.setBalance = function(value) {
    this.balance = value;
  };
this.updateStatement = function(number) {
  this.statement.push(number);
};
this.getStatement = function() {
  return this.statement;
};
this.printStatement = function() {
  this.statement.forEach(statement =>  {
  console.log('$' + statement + '\n');
})
}
this.deposit = function(value) {
  if (typeof valeu !== 'number' || value <= 0) {
    console.log('Must be a number greater than zero')
    return
  } else
  this.updateStatement(value);
  this.setBalance(this.balance + value);
}

  this.getBalance = () => {
    return this.balance;
  },
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
}

const bank = new MiniBank(1000);
console.log(bank.balance);
bank.deposit(5000)
console.log(bank.balance);
bank.withdraw(2500);
console.log(bank.balance);
bank.withdraw(30)
console.log(bank.balance)


//Update the `MiniBank` constructor function with methods and properties as follows:

//1. Define a property named `statement`. Assign an initial value of an array containing the `balance` parameter passed to the constructor.


//2. Add a `setBalance` function. This function should receive a `value` parameter and assign it to the `balance` property of `MiniBank`.


//3. Write an `updateStatement` function that takes in a number and pushes it to the `statement` array.


//4. Write a `getStatement` function that returns the `statement` property.


//5. Write a `printStatement` function that prints each element in the `statement` array on its own line.

//6. Write a `deposit` function that takes a value and performs the following:



  // - Calls `updateStatement` to record the deposit transaction.
   //- Calls `setBalance` to update the `balance` property.

//7. Write a `withdraw` function that takes a value and performs the following:

   //- Calls `updateStatement` to record the withdrawal transaction. (Be sure to use a negative number here.)
   //- Calls `setBalance` to update the `balance` property.

//### Part 2 - Create and use a `MiniBank` instance

//1. Create a new `bank` object using the `MiniBank` constructor function.


//2. Print the `bank` balance.

//3. Deposit some money into the `bank` object.


//4. Print the `bank` balance.

//5. Withdraw some money from the `bank` object.

//6. Print the `bank` balance.

//## Bonus 🏆

//- Add code to throw an error if the user tries to withdraw more money than they have, or try to deposit or withdraw values that aren't positive numbers.

//- Add code to return a copy of the `statement` array when `getStatement` is called, rather than returning the original array.



