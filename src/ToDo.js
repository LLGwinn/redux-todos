import React from "react";
import './ToDo.css'

function ToDo( {task, id, remove} ) {
    const deleteTodo = (evt) => {
        evt.preventDefault();
        remove(id);
    }

    return (
        <div className='ToDo'>
            {task} 
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}

export default ToDo;