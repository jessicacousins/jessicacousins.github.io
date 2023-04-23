let position = 1;
const gridSize = 100;

function createGrid() {
  for (let i = 1; i <= gridSize; i++) {
    let div = document.createElement("div");
    div.id = "n" + i;
    div.innerText = i;
    document.getElementById("target").appendChild(div);
  }
}

function move() {
  setTimeout(() => {
    if (position > gridSize) return;
    toggle(position);
    toggle(position - 1);
    position += 1;
    move();
  }, 100);
}

function toggle(position) {
  if (position < 1) return 0;
  const name = "n" + position;
  const element = document.getElementById(name);
  element.classList.toggle("on");
}
