const todos = [];

export function getTodos() {
    return todos;
}

export function createTodo(title, description) {
    const todo = {
        id: crypto.randomUUID(),
        title,
        description
    };

    todos.push(todo);
}

export function deleteTodo(id) {
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
        todos.splice(index, 1);
    }
}

export function updateTodo(id, title, description) {
    const index = todos.findIndex(todo => todo.id === id);

    if (index === -1) {
        return;
    }

    todos[index].title = title;
    todos[index].description = description;
}