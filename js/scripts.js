// function bodyQuery(queryStr) {
//   console.log(document.querySelector(queryStr));
//   console.log(document.querySelectorAll(queryStr));
// }
//
// bodyQuery('body');

// const header = document.querySelector('#header');
// console.log(header);
//
// header.addEventListener('click', event => header.style.backgroundColor = "dodgerblue");
//
// document.addEventListener('keydown', event => {
//   console.log(event);
//   header.style.backgroundColor = 'tomato';
//
//   if(event.key === "Enter") {
//     alert('You hit the enter key.');
//   }
// })
// const button = document.querySelector('button');
// const div = document.querySelector('div');
// const hOne = document.querySelector('h1');
//
// button.addEventListener('click', event => alert('CLICK'));
// div.addEventListener('mouseover', event => div.style.backgroundColor = "cyan");
// document.addEventListener('keyup', event => hOne.style.color = "purple");
// document.addEventListener('click', event => window.location.assign('https://google.com'));

const buttons = document.querySelectorAll('button');

// for(let button of buttons) {
//   button.addEventListener('click', () => alert('clicked'));
// }

buttons.forEach(button => button.addEventListener('click', () => alert('clicked')));
