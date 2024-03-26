// The input gets stored in these variables 
// Get references to the form and task list container
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Function to add new Task to list
function addTask(taskText) {
  // creating new div element in html 
  const taskItem = document.createElement('div');
  taskItem.textContent = taskText;

  taskList.appendChild(taskItem);
} 