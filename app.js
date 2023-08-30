// ? Creating The DOM
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//? Event Listeners
todoBtn.addEventListener('click', addTodo);

//? Functions
function addTodo (e) {
    //* Prevents Form from submitting
    e.preventDefault();
    // * Create DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //* Create LI
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
    //* Create Check Button
    const checkBtn = document.createElement('button');
    checkBtn.classList.add('check-btn');
    checkBtn.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    todoDiv.appendChild(checkBtn);
    //* Create Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todoDiv.appendChild(deleteBtn);
    //* Append the items
    todoList.appendChild(todoDiv);
     
};