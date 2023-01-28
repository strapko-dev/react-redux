import React from "react";
import { useAppDispatch } from "../hooks"
import {deleteTodo, toggleStatus} from "../store/todoSlice"

type IToDoProps = {
    id: string,
    title: string,
    completed: boolean
}

function TodoItem ({id, title, completed}: IToDoProps): React.ReactElement {
    const dispatch = useAppDispatch()

    return (
        <li key={id}>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleStatus(id))} />
            <span>{title}</span>
            <span className='delete' onClick={() => dispatch(deleteTodo(id))}>&times;</span>
        </li>
    );
}

export default TodoItem;