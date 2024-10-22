document.addEventListener('DOMContentLoaded', () => {
    const taskButton = document.getElementById('task-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-checkbox';

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.innerHTML = '<img src="papelera.png" alt="Eliminar" class="delete-icon">';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });

            listItem.appendChild(checkbox);
            listItem.appendChild(taskSpan);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });
});
