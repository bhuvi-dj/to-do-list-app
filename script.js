const form = document.getElementById('to-do-form');
const input = document.querySelector('input[type="text"]');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = input.value.trim();

  if (task !== '') {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    span.textContent = task;
    button.textContent = 'Delete';
    button.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(button);
    taskList.appendChild(li);
    input.value = '';
  }
});
