const body = document.querySelector("body");
const handleWindowSize = () => {
  const winWidth = window.innerWidth;

  console.log(winWidth);
  if (winWidth < 600) {
    // body.style.backgroundColor = colors[1];
    body.className = "";
    body.classList.add("changeColor0");
  } else if (winWidth > 600 && winWidth < 700) {
    // body.style.backgroundColor = colors[1];
    body.className = "";
    body.classList.add("changeColor1");
  } else if (winWidth > 700 && winWidth < 800) {
    // body.style.backgroundColor = colors[2];
    body.className = "";
    body.classList.add("changeColor2");
  } else if (winWidth > 800 && winWidth < 900) {
    // body.style.backgroundColor = colors[3];
    body.className = "";
    body.classList.add("changeColor3");
  } else {
    // body.style.backgroundColor = colors[4];
    body.className = "";
    body.classList.add("changeColor4");
  }
};

window.addEventListener("resize", handleWindowSize);
