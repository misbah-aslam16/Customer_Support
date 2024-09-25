
const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

addTodoButton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') addTodo();
});

function addTodo() {
    const taskText = todoInput.value.trim();
    if (taskText === '') return;

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => listItem.remove());

    listItem.appendChild(deleteButton);
    listItem.addEventListener('click', () => listItem.classList.toggle('completed'));

    todoList.appendChild(listItem);
    todoInput.value = '';
    todoInput.focus();
}
