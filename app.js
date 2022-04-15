// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
mouseOnTop
✅ The text of the title should change when the mouse is on top of it.
mouseLeaves
✅ The text of the title should change when the mouse is leaves it.
windowResize
✅ When the window is resized the title should change.
mouseRightClick
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const h2 = document.querySelector("h2");

const superEventHandler = {
  mouseOnTop() {
    h2.innerText = "The mouse is here!";
    h2.style.color = colors[0];
  },
  mouseLeaves() {
    h2.innerText = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  windowResize() {
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
  },
  mouseRightClick() {
    h2.innerText = "That was mouse right click!";
    h2.style.color = colors[3];
  },
};

h2.addEventListener("mouseenter", superEventHandler.mouseOnTop);
h2.addEventListener("mouseleave", superEventHandler.mouseLeaves);
window.addEventListener("resize", superEventHandler.windowResize);
window.addEventListener("contextmenu", superEventHandler.mouseRightClick);
