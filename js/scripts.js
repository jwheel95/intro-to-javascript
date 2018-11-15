const name = prompt("Hello! What is your name?");

const favColor = prompt(`What is your favorite color, ${name}? Please type red, orange, yellow, green, blue, pink, purple, black, white, or grey.`).toLowerCase();

switch (favColor) {
  case 'red':
    alert(`Poem for ${name}: O my love's like a red, red rose.`);
    break;
  case 'orange':
    alert(`Poem for ${name}: Golden oranges on the tree, ripening in the sun.`);
    break;
  case 'yellow':
    alert(`Poem for ${name}: The yellow leaves begin to fade, and flutter from the temple elms.`);
    break;
  case 'green':
    alert(`Poem for ${name}: Misty's eyes are yellow-green, piercing, endless, gazing, keen...`);
    break;
  case 'blue':
    alert(`Poem for ${name}: Blue is a cool spring day when you play outside.`);
    break;
  case 'pink':
    alert(`Poem for ${name}: A rose is pink by the fountain's brink.`);
    break;
  case 'purple':
    alert(`Poem for ${name}: Purple twilight sky, sunset scattering...`);
    break;
  case 'black':
    alert(`Poem for ${name}: Think of the dark as a black park and the moon as a bounced ball.`);
    break;
  case 'white':
    alert(`Poem for ${name}: White is a cool breeze, wind on my cheek.`);
    break;
  case 'grey':
    alert(`Poem for ${name}: Grey rocks and greyer sea, and rocks along the shore.`);
    break;
  default:
    alert("That wasn't an option. Please refresh the page.");
}
