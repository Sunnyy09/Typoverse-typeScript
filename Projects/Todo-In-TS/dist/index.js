"use strict";
const todos = [];
function addTodo(title) {
    const newTodo = {
        id: todos.length + 1,
        title,
        completed: false
    };
    todos.push(newTodo);
    console.log(`Added: ${title}`);
}
function deleteTodo(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
        const removed = todos.splice(index, 1);
        console.log(`Deleted : ${removed[0].title}`);
    }
    else {
        console.log(`Todo with ID ${id} not found`);
    }
}
function completeTodo(id) {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
        todo.completed = true;
        console.log(`Completed: ${todo.title}`);
    }
    else {
        console.log(`Todo with ${id} not found`);
    }
}
function listTodos() {
    console.log("\nTodos:");
    // todos.map(todo => {
    //     console.log(`${todo.id}: ${todo.title}`)
    // })
    todos.forEach((todo) => {
        console.log(`[${todo.completed ? "x" : " "}] ${todo.id}: ${todo.title}`);
    });
}
addTodo("Learn TypeScript");
addTodo("TypeScript is known for type safety");
addTodo("Do some practice");
addTodo("Do something");
// deleteTodo(3)
completeTodo(2);
completeTodo(4);
listTodos();
