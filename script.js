document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("newtask");
  const taskInput = document.getElementById("taskInput");
  const tasksList = document.getElementById("tasks");

  function createTaskElement(taskText) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <input type="checkbox" class="complete-checkbox" onclick="completeTask(this)">
      <span>${taskText}</span>
      <button class="delete" onclick="deleteTask(this)">
        <img src="trash.png" alt="Delete">
      </button>
    `;
    return listItem;
  }

  function addTask(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const listItem = createTaskElement(taskText);
      tasksList.appendChild(listItem);
      taskInput.value = "";
    }
  }

  function completeTask(checkbox) {
    const taskItem = checkbox.parentNode;
    const taskText = taskItem.querySelector('span');
    taskText.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
  }

  function deleteTask(button) {
    const listItem = button.closest("li");
    const tasksList = listItem.parentElement;
    tasksList.removeChild(listItem);
  }

  todoForm.addEventListener("submit", addTask);
});
function deleteTask(button) {
  const listItem = button.closest("li");
  const tasksList = listItem.parentElement;
  tasksList.removeChild(listItem);
  alert("Item deleted");
}

function openTodoList() {
  // Toggle visibility of the landing and to-do sections
  const landingContainer = document.querySelector('.landing-container');
  const todoContainer = document.getElementById('todoContainer');

  landingContainer.style.display = 'none';
  todoContainer.style.display = 'block';
}

