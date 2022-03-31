import React, {useState} from 'react';

function AddTodoForm( {add} ) {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (evt) => {
        setNewTodo(evt.target.value);
    }

    const addTask = (evt) => {
        evt.preventDefault();
        add(newTodo);
        setNewTodo("");
    }

    return (
        <div>
            <form onSubmit={addTask}>
                <label htmlFor='newTodo'>Add a task:</label>
                <input type='text'
                       name='newTodo'
                       value={newTodo}
                       onChange={handleChange} 
                />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;