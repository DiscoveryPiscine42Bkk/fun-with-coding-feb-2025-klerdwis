document.addEventListener("DOMContentLoaded", loadTodos);

function addTodo() {
    let task = prompt("Enter a new task:");
    if (task) {
        let todoDiv = document.createElement("div");
        todoDiv.className = "todo";
        todoDiv.textContent = task;
        todoDiv.onclick = function () {
            removeTodo(todoDiv);
        };
        let list = document.getElementById("ft_list");
        list.prepend(todoDiv);
        saveTodos();
    }
}

function removeTodo(todo) {
    if (confirm("Do you really want to remove this task?")) {
        todo.remove();
        saveTodos();
    }
}

function saveTodos() {
    let todos = [];
    document.querySelectorAll(".todo").forEach(todo => {
        todos.push(todo.textContent);
    });
    document.cookie = "todos=" + JSON.stringify(todos) + ";path=/";
}

function loadTodos() {
    let cookies = document.cookie.split("; ");
    let todos = cookies.find(row => row.startsWith("todos="));
    if (todos) {
        todos = JSON.parse(todos.split("=")[1]);
        todos.forEach(task => {
            let todoDiv = document.createElement("div");
            todoDiv.className = "todo";
            todoDiv.textContent = task;
            todoDiv.onclick = function () {
                removeTodo(todoDiv);
            };
            document.getElementById("ft_list").prepend(todoDiv);
        });
    }
}
