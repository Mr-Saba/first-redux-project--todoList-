import {ADD_TODO, CANCEL_TODO, COMPLETE_TODO, DELETE_TODO} from "./Constants"
import {todos} from './States'



const reducer = ( state = todos, action) => {
    let newTodos
    switch (action.type) {
        case ADD_TODO: {
            newTodos = [...state]
            newTodos.push(action.payload)
            return newTodos
        }
        case CANCEL_TODO: {
            
        } 
        case COMPLETE_TODO: {
            newTodos = [...state]
            newTodos = newTodos.filter(item => item.id !== action.payload.id )
            return [
                ...newTodos,
                action.payload
            ]
           
        }
        case DELETE_TODO: {
            newTodos = [...state]
            newTodos = newTodos.filter(todo=>todo.id != action.payload)
            return newTodos
        }
        default: {
            return state
        }
    }

}
export default reducer