import '../../styles/todo.css'

export default function Todo({ text, callback }) {
    return (
        <div className='todo-container'>
            <p className='todo-text'>
                {text}
            </p>
            <button
                className='delete-button'
                onClick={callback}
                title='Delete todo'
                aria-label='Delete todo'
            >
                X
            </button>
        </div>
    )
}
