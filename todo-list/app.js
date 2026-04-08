const input = document.querySelector(".inp");
const btn = document.querySelector("button");
const list = document.querySelector(".list");

function addTask() {
  if (input.value === "") {
    alert("You must write something");
    saveData();
  } else {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "&#128465;";
    li.appendChild(span);
    saveData();
  }
  input.value = "";
  saveData();
}

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  saveData();
});

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showData() {
  list.innerHTML = localStorage.getItem("data");
}

showData();
