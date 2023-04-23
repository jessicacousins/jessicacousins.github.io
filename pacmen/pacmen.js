let pos = 0;
const pacArray = [
  ["PacMan1.png", "PacMan2.png"],
  ["PacMan3.png", "PacMan4.png"],
];
let direction = 0;
const pacMen = [];

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

function makePac() {
  let velocity = setToRandom(10);
  let position = setToRandom(200);

  let game = document.getElementById("game");
  let newimg = document.createElement("img");
  newimg.style.position = "absolute";
  newimg.src = "PacMan1.png";
  newimg.width = 100;

  newimg.style.left = position.x;
  newimg.style.top = position.y;

  game.appendChild(newimg);

  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x + "px";
    item.newimg.style.top = item.position.y + "px";
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  if (
    item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
    item.position.x + item.velocity.x < 0
  )
    item.velocity.x = -item.velocity.x;
  if (
    item.position.y + item.velocity.y + item.newimg.height >
      window.innerHeight ||
    item.position.y + item.velocity.y < 0
  )
    item.velocity.y = -item.velocity.y;
}

function makeOne() {
  pacMen.push(makePac());
}

// width travel pacman code
let pos1 = 0;
let pageWidth = window.innerWidth;
const pacArray1 = [
  ["./PacMan1.png", "./PacMan2.png"],
  ["./PacMan3.png", "./PacMan4.png"],
];

let direction1 = 0;
let focus = 0;

function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction1 = checkPageBounds(direction1, imgWidth, pos1, pageWidth);
  img.src = pacArray1[direction1][focus];
  if (direction1) {
    pos1 -= 20;
    img.style.left = pos1 + "px";
  } else {
    pos1 += 20;
    img.style.left = pos1 + "px";
  }
}
setInterval(Run, 300);

function checkPageBounds(direction1, imgWidth, pos1, pageWidth) {
  if (pos1 + imgWidth > pageWidth) {
    direction1 = 1;
  } else if (pos1 < 0) {
    direction1 = 0;
  }
  return direction1;
}
checkPageBounds();
