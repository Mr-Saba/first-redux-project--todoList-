import React from 'react'
import "../App.css"
import { MdDone } from 'react-icons/md';
import { HiMinus } from 'react-icons/hi';
import {useDispatch} from "react-redux"
import { CompleteTodo, DeleteTodo } from '../Redux/Actions';

function TodoController({todo}) {
    let dispatch = useDispatch()

    return (
        <td>
                    <button onClick={() =>dispatch(DeleteTodo(todo.id))}><HiMinus /></button>
                    <div style={{ width: "20px", height: "auto", display: "inline-block" }}></div>
                    <button onClick={() => dispatch(CompleteTodo({
                        ...todo,
                        status: "completed"
                    }))}><MdDone /></button>
        </td>
    )
}

export default TodoController
