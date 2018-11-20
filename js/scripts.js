// const leastFavoriteTeams = ['Yankees', 'Real Madrid', 'Patriots', 'Alabama'];
//
// leastFavoriteTeams.unshift('Lakers');
// leastFavoriteTeams.push('Ohio State');
// leastFavoriteTeams.splice(leastFavoriteTeams.indexOf('Patriots'), 1);
// leastFavoriteTeams.unshift('Patriots');
// console.log(leastFavoriteTeams);
/**
 * 1) Add 'Lakers' to the front of the leastFavoriteTeams array
 * 2) Add 'Ohio State' to the back of the leastFavoriteTeams array
 * 3) Remove 'Patriots' from the leastFavoriteTeams array
 * 4) Add 'Patriots' back to the beginning of the leastFavoriteTeams array
 * 5) Console log the array to see if you did everything right
 *
 * -> ['Patriots', 'Lakers', 'Yankees', 'Real Madrid', 'Alabama', 'Ohio State']
 */

// const heroes = ['Drow', 'Phantom Lancer', 'Invoker'];
//
// heroes.reverse();
// heroes.splice(1, 0, 'Ember Spirit');
// heroes.pop();
// heroes.shift();
// heroes.unshift('Shadow Fiend');
// console.log(heroes);
/**
 * 1) Reverse the heroes array
 * 2) Add 'Ember Spirit' after the first index of the heroes array
 * 3) Remove the last member of the heroes array
 * 4) Remove the first item of the heroes array
 * 5) Add 'Shadow Fiend' to the beginning of the heroes array
 * 6) Console log the array to see if you did everything right
 *
 * -> ['Shadow Fiend', 'Phantom Lancer', 'Ember Spirit']
 */

// const name = 'Joe';
// console.log(name);
//
// const logSomething = function() {
//   console.log(name);
// };
//
// logSomething();

// function add(a, b) {
//   console.log(a + b);
// }
//
// function subtract(a, b) {
//   console.log(a - b);
// }
//
// add(2, 89);
// subtract(99, 54);

// const add = (a, b) => {
//   console.log(a + b);
// }
//
// add(346, 8465);
//
// const sayName = name => {
//   console.log(name);
// }
//
// sayName('Fido');
//
// const cat = 'Smokey';
//
// console.log(cat.substr(2));

// function calcDogYears(years) {
//   alert(years * 7);
// };
//
// calcDogYears(+prompt('How old is your dog?'));

// function lifetimeSupply(ageNow, amountPerDay, maxAge) {
//   alert(`You will need ${(maxAge - ageNow) * 365 * amountPerDay} to last you until you are ${maxAge}.`)
// }
//
// lifetimeSupply(+prompt("How old are you now?"), +prompt("How much do you need per day?"), +prompt("How old will you live to be?"));

// function baseballTeamName(hometown, weatherEvent, animalName) {
//   alert(`Your baseball team name is: ${hometown} ${weatherEvent} ${animalName}.`);
// }
//
// baseballTeamName("Sebastopol", "Hailstorm", "Wolverines");

class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

const ben = new Person('Ben');

console.log(ben.sayName());
