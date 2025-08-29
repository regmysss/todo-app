import '../../styles/searchTodo.css'
import Input from './Input'

export default function SearchTodo({ quary, setQuary }) {
    return (
        <div className="search-todo-container">
            <Input
                placeholder="Search todos..."
                value={quary}
                onChange={(e) => setQuary(e.target.value)}
            />
        </div>
    )
}