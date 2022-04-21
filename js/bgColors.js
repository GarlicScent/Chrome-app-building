const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];
const bgColorBtn = document.querySelector("button");

function paintBgColor() {
  const ranNo1 = Math.floor(Math.random() * colors.length);
  let ranNo2 = Math.floor(Math.random() * colors.length);

  if (ranNo1 === ranNo2) {
    ranNo2 += 1;
  }
  const color1 = colors[ranNo1];
  const color2 = colors[ranNo2];
  document.body.style.background = `linear-gradient(0.25turn, ${color1}, ${color2})`;
}

bgColorBtn.addEventListener("click", paintBgColor);
