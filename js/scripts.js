// Arrays always start at 0, not 1 (0-indexed)

// const myFirstArray = ['Joe', 23, true, 'Sebastopol', ['Megan', 'Smokey', 'Venus']];
//
// console.log(myFirstArray[4][1]);

// const geekwise = ['Web for Beginners', true], ['Mobile Friendly', true], ['Intro to JS', false]];
//
// console.log(geekwise[1][0]); //logs 'Mobile Friendly'

// const joe = ['The Shape of Water', 27, true, 2013];
//
// console.log(joe, joe.length);

// const movie1 = ['Lord of the Rings', 'Frodo'];
// const movie2 = ["Pan's Labyrinth", 'Ophelia'];
// const movie3 = ['Fight Club', 'Tyler'];
// const movie4 = ['Birdman', 'Riggan'];
// const movie5 = ['The Shape of Water', 'Elisa'];
//
// const favoriteMovies = [movie1[0], movie2[0], movie3[0], movie4[0], movie5[0]];
//
// alert(favoriteMovies);
//
// console.log(movie1[0], movie5[0])
//
// alert(favoriteMovies.length);

// while Loop
// let counter = 0;
//
// while (counter <= 99) {
//   console.log(counter);
//
//   counter++;
// }

// -> don't do while loops, you're better than that.

// for Loop
// for(let i = 1; i <= 10; i++) {
//   console.log('Joe' + i);
// }

// const names = ['Joe', 'Megan', 'Smokey', 'Venus'];

// for(let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// const albums = ['The Wall', 'The Crane Wife', 'Songs for the Deaf', 'The Suburbs'];

// for (let i = 0; i < albums.length; i++) {
//   console.log(albums[i]);
// }

// for (let name of names) {
//   console.log(name);
// }

// const person = {
//   name: 'Joe',
//   age: 23
// };
//
// for(let key in person) {
//   console.log(person[key]);
// }

// const user = {};
// console.log(user);
//
// user.name = prompt("What's your name?");
// user.age = prompt("How old are you?");
//
// console.log(user);
//
// console.log(user.name);

const favAlbums = [['The Wall', 1979], ['Neon Bible', 2006], ['Picaresque', 2005], ['Rain Dogs', 1985]];

for(let favAlbum of favAlbums) {
  console.log(favAlbum);

  if (favAlbum[0] == 'Neon Bible') {
    alert(favAlbum);
  }
}

favAlbums.forEach(favAlbum => {
  console.log(favAlbum);

  if (favAlbum[0] == 'Neon Bible') {
      alert(favAlbum);
    }
});
