// const str = new String('Joe');
// console.log(str);
//
// const arr = new Array('Joe', 23);
// console.log(arr);
//
// const person = {
//   name: 'Billy Bob'
// };
//
// console.log(person);
//
// const dog = new Object();
//
// dog.name= 'Fido';
//
// console.log(dog)

// Old Way Constructor Function
// function Animal(name, energy) {
//   this.name = name;
//   this.energy = energy;
//
//   this.play = function() {
//     this.energy -= 5;
//   }
// };
//
// Animal.prototype.eat = function() {
//   this.energy += 10;
// }
//
// dog.prototype.fetch = function() {
//   this.energy -= 20;
// }
//
// const dog = new Animal('Dog', 40);
// const cat = new Animal('Cat', 5);
// console.log(dog);
// console.log(cat);
// console.log(dog.energy);
// dog.play();
// console.log(dog.energy);
// dog.eat();
// console.log(dog.energy);

function Person(username, password) {
  this.username = username;
  this.password = password;
}

const username = prompt('What is your username?');
const password = prompt('What is your password?');

const user = new Person(username, password);
console.log(user);
