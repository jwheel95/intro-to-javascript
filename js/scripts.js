const chore1 = [prompt("What is one chore you need to do this weekend?")];
const chore2 = [prompt("What is a second chore you need to do this weekend?")];
const chore3 = [prompt("What is a third chore you need to do this weekend?")];

let weekend = [chore1, chore2, chore3];

console.log(weekend);

for (let i = 0; i < weekend.length; i++) {
   weekend[i].push(prompt(`'${weekend[i]}': How many hours will it take to complete this?`));

 }

for (let i = 0; i < weekend.length; i++) {

}
