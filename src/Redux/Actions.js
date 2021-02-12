import {ADD_TODO, CANCEL_TODO, COMPLETE_TODO, DELETE_TODO} from './Constants'

const AddTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    }
}
const CancelTodo = (todo) => {
    return {
        type: CANCEL_TODO,
        payload: todo,
    }
}
const CompleteTodo = (todo) => {
    return {
        type: COMPLETE_TODO,
        payload: todo,
    }
}
const DeleteTodo = (todo) => {
    return {
        type: DELETE_TODO,
        payload: todo,
    }
}

export {AddTodo, CancelTodo, CompleteTodo, DeleteTodo}  