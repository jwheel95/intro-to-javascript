// function someFn(otherArgs) {
//   console.log(name);
//   console.log(otherArgs);
// }
//
// someFn('Joe', 23, 'Blue', true);
//
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
//
// console.log([...arr1, ...arr2]);

// ARRAY DESTRUCTURING

// const todoList = ['dishes', 'mow lawn', 'put up the christmas tree'];
// console.log(todoList);
//
// const [ firstItem, secondItem, thirdItem ] = todoList;
//
// console.log(firstItem);
// console.log(secondItem);
// console.log(thirdItem);

// const person = {
//   name: 'Ben',
//   age: 29,
//   wife: {
//     name: 'Norma',
//     age: 29
//   }
// }
//
// console.log(person.name);
//
// const { name } = person;
// console.log(name);

// function getAllCharacters(url) {
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       const pagination = data.info.next;
//       if (pagination) {
//         getAllCharacters(pagination);
//       }
//       makeCard(data);
//     })
//     .catch(error => console.log(error))
// }

async function getAllCharacters(url) {
  const response = await fetch(url);
  const data = await response.json();
  const pagination = data.info.next;

  if (pagination) { getAllCharacters(pagination) }

  makeCard(data);
}

getAllCharacters('https://rickandmortyapi.com/api/character/');

function makeCard(data) {
  const { results: characters } = data;
  console.log(characters);

  characters.forEach(character => {
    const card = document.createElement('div');
    card.classList = 'card';
    card.innerHTML = `
      <img class="card-img-top" src="${character.image}">
      <div class="card-body">
        <h2 class="card-title">${character.name}</h2>
        <p class="card-text">Species: ${character.species}</p>
        <p class="card-text">Location: ${character.location.name}</p>
    `;
    document.body.append(card);
  })
}
