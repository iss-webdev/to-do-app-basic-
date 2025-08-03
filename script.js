const input = document.getElementById('task-input');
const btn = document.querySelector('.enter');
const form = document.getElementById('task-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
});

btn.addEventListener('click', () => {
    const inputVal = input.value.trim();
    input.value = ' ';
    input.focus();
    if (inputVal.length <= 3) {
        alert('task should contain more than 3!');
        return;
    }

    const taskList = document.createElement('li');
    taskList.classList.add('task-list-1');
    taskList.textContent = inputVal;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    taskList.appendChild(checkbox);

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            taskList.classList.add('completed');
        } else {
            taskList.classList.remove('completed');
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deletebtn');
    deleteBtn.innerHTML = `dlt`
    taskList.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        taskList.remove();
    });

    taskList.addEventListener('dblclick', () => {
        const newTask = prompt('edit text: newTask.value');
        taskList.textContent = newTask;
        taskList.appendChild(checkbox);
        taskList.appendChild(deleteBtn);
    });

    const ul = document.getElementById('task-list');
    ul.appendChild(taskList);
    ul.appendChild(newTask);

    input.value = " ";
});

