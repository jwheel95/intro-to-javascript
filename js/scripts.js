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

// function Person(username, password) {
//   this.username = prompt('What is your username?');
//   this.password = prompt('What is your password?');
// }
//
// const user = new Person();
// console.log(user);

class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  play() {
    this.energy -= 5;
  }
};

class Dog extends Animal {
  constructor(name, energy, says) {
    super(...arguments);

    this.says = says;
  }

  speak() {
    console.log(`Dog says: ${this.says}`);
  }
}

const fido = new Dog('Fido', 40, 'woof');
console.log(fido);
fido.play();
console.log(fido.energy);
