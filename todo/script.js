function init() {
  // Добавить кнопку удаления каждому пункту
  let itemsList = document.querySelectorAll("#list li");
  for (let item of itemsList) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    item.appendChild(span);
  }

  // Клик на кнопке удаления
  document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("close")) return;
    event.target.parentElement.remove();
  });

  // Помечать пункт как сделанный при клике
  let list = document.querySelector("#list");
  list.addEventListener(
    "click",
    function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );

  // Добавление нового пункта
  document.getElementById("add-form").addEventListener("submit", (event) => {
    event.preventDefault();

    let li = document.createElement("li");
    let inputValue = document.getElementById("add-input").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
      alert("Название не может быть пустым");
    } else {
      document.getElementById("list").appendChild(li);
    }
    document.getElementById("add-input").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  });
}

window.onload = init;
