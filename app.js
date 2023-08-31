// ? Creating The DOM
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//? Event Listeners
document.addEventListener('DOMContentLoaded', getTodos)
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

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
    // *ADD TODO TO LOCAL STORAGE
    saveLocalTodos(todoInput.value);
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
    //* Delete the input
    todoInput.value = '';
};

function deleteCheck (e) {
    const item = e.target;

    // DELETE TODO
    if(item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        //*ANIMATION
        todo.classList.add('delete');
        //* Remove todo from local storage
        removeLocalTodos(todo);
       //* Animation contines   
        todo.addEventListener('transitionend', () => {
            todo.remove();
        });
    };

    // CHECK TODO
    if(item.classList[0] ==='check-btn') {
        const todo = item.parentElement;
        //* Animation
        todo.classList.toggle('completed');
    };
};

function saveLocalTodos(todo) {
    //* To Check If Its Saved In The Local Storage Already
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else {
        todos =JSON.parse(localStorage.getItem('todos'))
    };
    
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    //* To Check If Its Saved In The Local Storage Already
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else {
        todos =JSON.parse(localStorage.getItem('todos'))
    };

    todos.forEach ((todo) => {
        // * Create DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //* Create LI
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.innerText = todo;
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
    });
};

function removeLocalTodos(todo) {
    //* To Check If Its Saved In The Local Storage Already
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else {
        todos =JSON.parse(localStorage.getItem('todos'))
    };

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
} 