const firstName = prompt('What is your first name?');
const lastName = prompt('What is your last name?');

console.log(firstName);

alert(lastName);

const birthday = new Date(prompt('When were you born? (day, month, and year)'));

confirm(`Is this your birthday? ${birthday}`);

alert(birthday);
