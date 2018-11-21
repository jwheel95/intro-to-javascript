// function takehomeNumber() {
//   const myNumber = (+prompt("Give me a number."));
//   console.log(myNumber * myNumber);
//
//   if (!myNumber) {
//     alert("Not a number!");
//     takehomeNumber();
//   };
// };
//
// takehomeNumber();

// function takehomeString () {
//   let myString = prompt("Type a sentence.");
//   if (!myString.endsWith('.')) {
//     myString = myString.concat(".");
//   }
//   console.log(myString.charAt(0).toUpperCase() + myString.slice(1));
// }
//
// takehomeString();

function Palindrome() {
  const myPalindrome = prompt("Enter a palindrome.");
  if (myPalindrome.split("").reverse().join("") === myPalindrome) {
    alert("That's a palindome!");
  }
  else {
    alert("That's not a palindrome!");
  }
}

Palindrome();
