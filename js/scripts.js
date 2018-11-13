// try it yourself

// const firstVar = "this is a string";
// const secondVar = new String("this is a string");

// loose equals doesn't care about data type
// console.log(firstVar == secondVar);

// strict equals does care about data type
// console.log(firstVar === secondVar);

// order of operations (PEMDAS) applies to arithmetic operators

//increment and decrement
// let number = 1;
// console.log('number', number);
// number++;
// console.log('number', number);
// number++;
// console.log('number', number);
// number--;
// console.log('number', number);

//assignment operators

// const item = 2;
// const item2 = 46.78;
// const discount = .5;
//
// console.log(number += item);
// console.log(number += item2);
// console.log(number *= discount);

// providing a default for prompts

// const numOne = +prompt('Give me a number', 10);
// const numTwo = +prompt('Give me a second number', 10);
// const sum = numOne + numTwo;
//
// alert('Your numbers added together = ' + sum);
//
// const numThree = +prompt('What would you like to multiply by?', 10);
//
// alert(sum * numThree);

// CONTROL FLOW !
// const firstName = "Ben";
// if (firstName == "Jacob") {
//   console.log('Your name is Jacob.');
// } else if (firstName == "Ben") {
//   console.log('Your name is Ben.');
// } else {
//   console.log('Your name is not Jacob.');
// }
//
// const magicNumber = 1;
// if (magicNumber === 1) {
//   console.log(1);
// } else if (magicNumber === 2) {
//   console.log(2);
// } else {
//   console.log('No magic number for you.');
// }

// both sides of && must be true to run
// only one side needs to be true for || to run (or both sides)
// if (true && true) {
//   console.log('Great success!');
// }
//
// const age = 25;
// if(age >= 21 && age <= 80) {
//   console.log("You are over 21 but less than 80.");
// }
//
// if(!false) {
//   console.log("Victory!");
// }
//
// const lastName = "Wheelock";
// if(lastName) {
//   console.log(`Your last name is: ${lastName}`);
// } else if (!lastName) {
//   console.log('You did not provide a last name.');
// }

// prompt user for name
// if they provide a name, alert their name
// if they provide no value, alert that you need a valid name
// const userName = prompt('What is your name?');

// if(userName) {
//   alert(`Your name is ${userName}`);
// } else if (!userName) {
//   alert('You did not provide your name.')
// }

// above example ^^ refactored to ternary
// userName ? alert(`Your name is ${userName}`) : alert('You did not provide your name.');

// const superHero = prompt("What is your favorite superhero?");
//
// switch (superHero) {
//   case 'Batman':
//     console.log("Batman is awesome.");
//     break;
//   case 'Superman':
//     console.log("Superman is not better than Batman.");
//     break;
//   default:
//     console.log("Sorry, that's not a real superhero.");
// }

const age = +prompt("How old are you?");

if (age >= 18 && age <= 80) {
  const starWars = confirm("Do you like Star Wars?");

  if (starWars) {
    alert("May the force be with you.");
  }
} else if (age > 80) {
  const prunes = confirm("Do you like prunes?");

  prunes ? alert('Gross') : alert("I guess you're alright.");
} else if (age < 18) {
  alert('You are not old enough to proceed.');
}
