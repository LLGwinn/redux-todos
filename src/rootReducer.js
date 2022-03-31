import {v4 as uuid} from 'uuid';

const INITIAL_STATE = {todos: []};

function rootReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD':
            return {...state, 
                    todos: [...state.todos, {task: action.payload, id: uuid()}]};
        case 'DELETE':
            return {...state, 
                    todos: state.todos.filter(item => action.payload !== item.id)};
        default:
            return state;
    }
}

export default rootReducer;