import { memo, useState } from 'react';
import '../../styles/addTodo.css'
import Input from './Input';

export function AddTodo({ addTodo }) {
    const [value, setValue] = useState("");

    const handleAddTodo = (value) => {
        addTodo(value);
        setValue("");
    }

    const handleOnKeyDown = (e) => {
        if (e.code !== "Enter") return;

        handleAddTodo(value);
    }
    

    return (
        <div className='add-todo-container'>
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add new todo..."
                onKeyDown={handleOnKeyDown}
            />
            <button
                className='add-button'
                onClick={() => handleAddTodo(value)}
                title='Add todo'
                aria-label='Add todo'
            >
                Add
            </button>
        </div>
    )
}

export default memo(AddTodo);