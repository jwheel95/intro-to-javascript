// const title = document.querySelector('#title');
//
// title.innerHTML = '<h1>My title</h1';

// const title = document.createElement('h1');
// title.textContent = 'Our title';
// // document.body.appendChild(title);
//
// const list = document.createElement('ul');
// // document.body.appendChild(list);
//
// const cat1 = document.createElement('li');
// cat1.textContent = 'Venus';
// cat1.dataset.id = 1;
//
// const cat2 = document.createElement('li');
// cat2.textContent = 'Smokey';
//
// const cat3 = document.createElement('li');
// cat3.textContent = 'Benito';
//
// list.append(cat1, cat2, cat3);
//
const js = document.querySelector('script');
//
// document.body.insertBefore(title, js);
// document.body.insertBefore(list, title);
//
// const button = document.createElement('button');
// button.textContent = "Submit";
// button.id = 'my-button';
// button.className = "btn btn-success";
// button.classList.replace('btn-success', 'btn-info');
// document.body.appendChild(button);
//
// title.classList.add('text-center');
//
// button.addEventListener('click', () => {
//   title.classList.toggle('hidden');
// })
//
// button.setAttribute('disabled', true);

// const navbar = document.createElement('nav');
// navbar.className = "navbar navbar-expand-lg";
// document.body.insertBefore(navbar, js);
//
// const navlist = document.createElement('ul');
// navlist.className = "navbar-nav";
// navbar.appendChild(navlist);
//
// const nav1 = document.createElement('li');
// nav1.textContent = 'Home';
// const nav2 = document.createElement('li');
// nav2.textContent = 'Contact';
// const nav3 = document.createElement('li');
// nav3.textContent = 'About';
// navlist.append(nav1, nav2, nav3);
//
// const container = document.createElement('div');
// document.body.insertBefore(container, js);
// container.className = "container";
//
// const header = document.createElement('h1');
// header.textContent = 'Hello World!';
// header.className = "text-center";
// container.append(header);
//
// const paragraph = document.createElement('p');
// paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione harum temporibus unde, dolorum sit velit vero aliquam cupiditate ullam voluptatibus deserunt perferendis ab, nihil veritatis tenetur earum consequuntur libero illo aliquid dolorem, ea esse porro qui veniam. Porro dolore, ex.';
// paragraph.className = "text-center";
// container.append(paragraph);
//
// const footer = document.createElement('footer');
// footer.textContent = 'Friend us on Fb';
// footer.className = "footer text-center";
// document.body.insertBefore(footer, js);

//  FIZZBUZZ
// Loop between 2 numbers (traditionally 0 and 100)
// If number is a multiple of 3 log "Fizz"
// If number is a multiple of 5 log "Buzz"
// If number is a multiple of 3 and 5, log "FizzBuzz"
// If none of those, log the number

function fizzBuzz(min, max) {
  for (let i = min; i <= max; i++) {
    const p = document.createElement('p');
    if (i % 3 === 0 && i % 5 === 0) {
      createItem(i, FizzBuzz);
    } else if (i % 3 === 0) {
      createItem(i, Fizz);
    } else if (i % 5 === 0) {
      createItem(i, Buzz);
    } else {
      createItem(i);
    }
    document.body.appendChild(p);
    }
  }

function createItem(i, str) {
  const p = document.createElement('p');
  str > p.textContent = `${i} ${str}` : p.textContent = i;
  document.body.appendChild(p);
}

fizzBuzz(6, 800);
