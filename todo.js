document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-button');
  const adderTextBox = document.getElementById('adder-textbox');
  const list = document.getElementById('list');


  addButton.addEventListener('click', () => {

if(adderTextBox.value.trim() !== ""){
        const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      list.appendChild(deleteButton);

      const task = document.createElement('li');
      task.textContent = adderTextBox.value;
      list.appendChild(task);

      adderTextBox.value = '';}
  else{
    alert("Please enter a task");
  }
  });
});













