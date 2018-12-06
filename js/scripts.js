// const newPrompt = +prompt('How much time would you like to wait? (in milliseconds)');
// console.log(newPrompt);
//
// const timer = setTimeout(quote, newPrompt);
//
// const intervalPrompt = +prompt('How many times do you want the message to appear?');
// console.log(intervalPrompt);
// const setTime = setInterval(quote, intervalPrompt);
//
// function quote () {
//   const random = alert(Math.random().toString(27).substring(2,15));
// }
//
// function endQuote () {
//   clearTimeout(timer);
// }

const username = prompt('What is your username?');

function mySetItem() {
  localStorage.setItem('user', username);
}

function myGetItem() {
  const userValue = alert(localStorage.getItem('user'));
}
