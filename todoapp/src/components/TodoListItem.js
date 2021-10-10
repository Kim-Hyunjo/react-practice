import React from "react";
import './TodoListItem.css';

const TodoListItem = (({ todo }) => {
    const { text, checked } = todo;
    return (
        <div>
            <span className={checked ? 'checkbox--selected' : 'checkbox'}></span>
            <span>{text}</span>
            <button type="submit">❌</button>
        </div>
    );
})

export default TodoListItem;