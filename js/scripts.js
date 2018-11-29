// console.log(document.forms.loginForm.button);
//
// const btn = document.forms.loginForm.button;
//
//
// btn.addEventListener('click', e => {
//   e.preventDefault();
//
//   let firstName = document.forms.loginForm.firstName;
//   console.log(firstName.value);
//   console.log("Clicked.");
//
//   firstName.value = '';
// })
// console.log(this);
//
// const person = {
//   firstName: 'Ben',
//   lastName: 'Reckas',
//   age: 29,
//   wife: {
//     firstName: 'Norma',
//     lastName: 'Reckas',
//     age: 29,
//
//     howOld() {
//       console.log(`${this.firstName} ${this.lastName} is: ${this.age} years old.`);
//     }
//   },
//
//   howOld() {
//     console.log(`${this.firstName} ${this.lastName} is: ${this.age} years old.`);
//   }
// };
//
// person.howOld();
// person.wife.howOld();
//
// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');

// btn1.addEventListener('click', logThis);
// btn2.addEventListener('click', logThis);
//
// function logThis() {
//   console.log(this);
// }

// btn1.addEventListener('click', function() {
//   this.style.display = 'none';
//   console.log(this);
// });
//
// btn2.addEventListener('click', () => {
//   console.log(this);
// });

const buttons = document.querySelectorAll('button');
console.log('buttons', buttons);

buttons.forEach(button => button.addEventListener('click', function() {
  this.style.display = 'none';
}))

const dog = {
  name: 'Fido',
  says: 'woof'
}

const cat = {
  name: 'Smokey',
  says: 'meow'
}

const baldEagle = {
  name: 'Freedom',
  says: 'Baaakawwww'
}

function speak(location) {
  alert(`${this.name} says: ${this.says}`);
};

const dogSays = speak.bind(dog);
dogSays();

const catSays = speak.bind(cat);
catSays();

const baldEagleSays = speak.bind(baldEagle);
baldEagleSays();

class Person {
  constructor(name, age, favColor) {
    this.name = name;
    this.age = age;
    this.favColor = favColor;
  }

  sayName() {
    console.log(this.name);
  }
}

const ben = new Person('Ben', 29, 'Pink');
const david = new Person('David', 40, 'Blue');

ben.sayName();
david.sayName();
