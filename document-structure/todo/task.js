const input = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  addTask();
});

function addTask() {
  const taskText = input.value.trim();

  if (!taskText) {
    input.value = '';
    return
  }

  const taskElem = document.createElement('div');

  taskElem.innerHTML = `
    <div class="task">
      <div class="task__title">
        ${taskText}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
  `;

  tasksList.appendChild(taskElem);

  const taskRemove = taskElem.querySelector('.task__remove');
  taskRemove.addEventListener('click', () => {
    taskElem.remove();
  });

  input.value = '';
}