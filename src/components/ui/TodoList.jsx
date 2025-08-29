import { useMemo } from "react";
import Todo from "./Todo";
import { filterTodos } from "../../utils/filterTodos";
import '../../styles/todoList.css'

export default function TodoList({ quary, todos, deleteTodo }) {
    const filteredTodos = useMemo(() => filterTodos(todos, quary), [quary, todos])

    return (
        <div className="todo-list-container">
            {
                todos.length === 0 &&
                (<p className="no-todos-text">😒 No todos yet 😒</p>)
            }
            {
                todos.length > 0 && filteredTodos.length === 0 &&
                (<p className="no-todos-text">😐 No todos found 😐</p>)
            }
            {
                filteredTodos.length > 0 &&
                filteredTodos.map((todo) => (
                    <Todo
                        key={todo.id}
                        text={todo.value}
                        callback={() => deleteTodo(todo.id)}
                    />
                ))
            }
        </div>
    )
}
