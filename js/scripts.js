const chore1 = [prompt("What is one chore you need to do this weekend?")];
const chore2 = [prompt("What is a second chore you need to do this weekend?")];
const chore3 = [prompt("What is a third chore you need to do this weekend?")];

const weekend = [chore1, chore2, chore3];

console.log(weekend);

for (let i = 0; i < weekend.length; i++) {
   weekend[i].push(+prompt(`'${weekend[i][0]}': How many hours will it take to complete this?`));

 }

 let longestItem = 0;
 let longestItemIndex = 0;

for (let i = 0; i < weekend.length; i++) {
  if(weekend[i][1] > longestItem) {
    longestItem = weekend[i][1];
  }

  console.log(longestItem);
  console.log(longestItemIndex);
}

console.log(weekend);
console.log('Longest Item: ', weekend.splice([longestItemIndex], 1));
console.log(weekend);

for(let item of weekend) {
  item.push('ez-pz');

  alert(item);
}
