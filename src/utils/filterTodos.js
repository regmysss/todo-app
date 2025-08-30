export const filterTodos = (todos, query) => {
    const queryText = normalizeStr(query);

    if (!queryText) return todos;

    return todos.filter(({ value }) => {
        const todoText = normalizeStr(value);
        return todoText.includes(queryText);
    });
};

const normalizeStr = (str) => str.toLowerCase().replace(/\s+/g, "");