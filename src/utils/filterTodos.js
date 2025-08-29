export const filterTodos = (todos, quary) => {
    const quaryText = quary.toLowerCase();

    return todos.filter((todo) => todo.value.toLowerCase().includes(quaryText));
}