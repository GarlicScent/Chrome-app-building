const loginForm = document.getElementById("js-login-input");
const loginInput = loginForm.querySelector("input");
const messageBox = document.querySelector("#js-loginMessage");
const loginMessageH2 = messageBox.querySelector("h2");
const newUsrBtn = messageBox.querySelector("button");

const HIDDEN_CLASSNAME = "hidden";

function paintLoginUser(username) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  messageBox.classList.remove(HIDDEN_CLASSNAME);
  messageBox.classList.add("msgFlexBox");
  loginMessageH2.innerText = `Hello ${username}. Welcome~~`;
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);

  paintLoginUser(username);
}

const ls_username = localStorage.getItem("username");

if (ls_username === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  messageBox.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  messageBox.classList.remove(HIDDEN_CLASSNAME);
  messageBox.classList.add("msgFlexBox");
  paintLoginUser(ls_username);
}

function getNewUsrName() {
  messageBox.classList.remove("msgFlexBox");
  messageBox.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  localStorage.removeItem("username");
  loginInput.value = "";
}
newUsrBtn.addEventListener("click", getNewUsrName);
