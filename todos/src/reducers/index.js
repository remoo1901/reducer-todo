const moment = require('moment')

export const initialState = {
    todos: [
        {
            item: 'Learn About Reducers', 
            completed: false, 
            timeCompleted: "2020-02-26T22:51:47-05:00",
            id: 384823948,
        },
    ]
};

// Actions 

// ADD_TODO
// TOGGLE_COMPLETE 
// CLEAR_COMPLETED

export function todoReducer(state, action){
    switch(action.type){

        case 'REFRESH_ITEMS':
            let localStorageState = action.payload
            return localStorageState
            
        case 'ADD_TODO':
            const newState = {...state, todos: [...state.todos, {item: action.payload, id: Date.now(), timeCompleted: moment().format(), completed: false}] }
            const stateStringified = JSON.stringify(newState);
            localStorage.setItem('state', stateStringified)
                return newState

            case 'CLEAR_COMPLETED': 
            return { 
                ...state, todos: state.todos.filter((todo) => !todo.completed)
            };
            case 'TOGGLE_COMPLETE': {
            return {
                ...state, todos: state.todos.map((todo) => (todo.id === action.payload 
                ? {...todo, completed: !todo.completed} : todo))
            }
        }
            default: 
                return state;
 
    }
}