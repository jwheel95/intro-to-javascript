js = document.querySelector('script');

startBtn = document.querySelector('#startBtn');

startBtn.addEventListener("click", getTitle => {
  const title = prompt("What is the title of the page?");
  const header = document.createElement('h1');
  header.textContent = title;
  header.className = "text-center";
  document.body.insertBefore(header, startBtn);
  const thingsToday = prompt("What are a few things that you did today?");
  const p = document.createElement('h1');
  p.textContent = thingsToday;
  p.className = "text-center col-sm-12";
  document.body.insertBefore(p, js);
});
