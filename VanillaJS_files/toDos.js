const toDoForm = document.getElementById("js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("js-toDoList");

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
  btn.addEventListener("click", deleteTodo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
