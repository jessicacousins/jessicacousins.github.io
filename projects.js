const textH1 = document.getElementById("text");
const speedBtn = document.getElementById("speed");
const text = "Jessica Cousins";

let i = 1;
let speed = 200 / speedBtn.value;

writeText();

function writeText() {
  textH1.innerText = text.slice(0, i);
  i++;
  if (i > text.length) {
    i = 1;
  }
  setTimeout(writeText, speed);
}

speedBtn.addEventListener("input", (e) => (speed = 200 / e.target.value));
