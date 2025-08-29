import { useCallback, useState } from "react";
import TodoList from "../ui/TodoList";
import AddTodo from "../ui/AddTodo";
import SearchTodo from "../ui/SearchTodo";
import { v4 } from "uuid";

export default function Main() {
    const [todos, setTodos] = useState([]);
    const [quary, setQuary] = useState("");

    const addTodo = useCallback((value) => {
        const trimmedValue = value.trim();

        if (trimmedValue === "") return;

        setTodos(prev => [...prev, { id: v4(), value: trimmedValue }])
    }, []);

    const deleteTodo = useCallback((id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }, [todos]);

    return (
        <main>
            <AddTodo
                addTodo={addTodo}
            />
            <SearchTodo
                quary={quary}
                setQuary={setQuary}
            />
            <TodoList
                quary={quary}
                todos={todos}
                deleteTodo={deleteTodo}
            />
        </main>
    )
}
