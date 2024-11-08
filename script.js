// Agregar evento de clic al botón para añadir tarea
document.getElementById('add-button').addEventListener('click', addTask);

// Función para añadir tarea
function addTask() {
    const taskText = getTaskInput();

    if (taskText === '') {
        alert('Por favor, escribe una tarea');
        return;
    }

    const taskItem = createTaskItem(taskText);
    document.getElementById('task-list').appendChild(taskItem);
    clearTaskInput();
}

// Función para obtener el texto de la tarea
function getTaskInput() {
    return document.getElementById('task-input').value.trim();
}

// Función para limpiar el campo de entrada de la tarea
function clearTaskInput() {
    document.getElementById('task-input').value = '';
}

// Función para crear un elemento de tarea
function createTaskItem(taskText) {
    const taskItem = document.createElement('li');

    // Crear el contenido de la tarea
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskContent.addEventListener('click', function() {
        toggleCompleteTask(taskContent);
    });

    // Crear botón de edición
    const editButton = createEditButton(taskContent);

    // Crear botón de eliminación
    const deleteButton = createDeleteButton(taskItem);

    taskItem.appendChild(taskContent);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    return taskItem;
}

// Función para alternar el estado de completado de la tarea
function toggleCompleteTask(taskContent) {
    taskContent.classList.toggle('completed');
}

// Función para crear el botón de edición
function createEditButton(taskContent) {
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', function() {
        editTask(taskContent);
    });
    return editButton;
}

// Función para editar una tarea
function editTask(taskContent) {
    const newTaskText = prompt('Edita la tarea:', taskContent.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskContent.textContent = newTaskText.trim();
    }
}

// Función para crear el botón de eliminación
function createDeleteButton(taskItem) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        taskItem.remove();
    });
    return deleteButton;
}
