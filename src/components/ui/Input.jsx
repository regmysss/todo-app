import '../../styles/input.css';

export default function Input(props) {
    return (
        <input
            className='todo-input'
            type="text"
            {...props}
        />
    )
}
