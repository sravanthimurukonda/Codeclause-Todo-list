document.addEventListener("DOMContentLoaded", function() {
  var addButton = document.querySelector("button");
  addButton.addEventListener("click", addTodo);

  function addTodo() {
    var input = document.getElementById("todoInput");
    var task = input.value;
    input.value = "";

    var list = document.getElementById("todoList");
    var item = document.createElement("li");
    item.className = "todo-item";

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";

    var text = document.createElement("span");
    text.className = "todo-task";
    text.textContent = task;

    var removeBtn = document.createElement("button");
    removeBtn.className = "todo-remove";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", function() {
      list.removeChild(item);
    });

    var sublistInput = document.createElement("input");
    sublistInput.type = "text";
    sublistInput.placeholder = "Enter a subtask";

    var sublistBtn = document.createElement("button");
    sublistBtn.textContent = "Add Subtask";
    sublistBtn.addEventListener("click", function() {
      addSubtask(item);
    });

    var sublist = document.createElement("ul");
    sublist.className = "todo-sublist";

    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(removeBtn);
    item.appendChild(sublistInput);
    item.appendChild(sublistBtn);
    item.appendChild(sublist);

    list.appendChild(item);
  }

  function addSubtask(parentItem) {
    var sublistInput = parentItem.querySelector("input[type='text']");
    var subtask = sublistInput.value;
    sublistInput.value = "";

    var sublist = parentItem.querySelector("ul");
    var subtaskItem = document.createElement("li");

    var subtaskText = document.createElement("span");
    subtaskText.textContent = subtask;

    var doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.addEventListener("click", function() {
      subtaskItem.classList.toggle("subtask-completed");
    });

    subtaskItem.appendChild(doneBtn);
    subtaskItem.appendChild(subtaskText);

    sublist.appendChild(subtaskItem);
  }
});