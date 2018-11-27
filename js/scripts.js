function getTitle() {
  const title = prompt("What is the title of the page?");
  const header = document.createElement('h1');
  header.textContent = title;
};

document.getElementById("startBtn").addEventListener("click", getTitle());
