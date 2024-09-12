JavaScript :
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create task 
    const taskItem = document.createElement('li');
    taskItem.className = 'flex justify-between items-center bg-gray-200 p-3 rounded-md';

    // Task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskItem.appendChild(taskSpan);

    // Delete Task
    const deleteButton = document.createElement('button');
    deleteButton.className = 'text-red-500 hover:text-red-700';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskItem.remove();
    };
    taskItem.appendChild(deleteButton);

    // Add the task to the list
    document.getElementById('taskList').appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
}