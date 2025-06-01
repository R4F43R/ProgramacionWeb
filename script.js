function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Por favor, escribe una tarea.");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "✖";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  input.value = "";
}
