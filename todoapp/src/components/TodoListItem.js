import React from "react";
import './TodoListItem.css';

const TodoListItem = (({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;
    return (
        <div>
            <span className={'checkbox ' + (checked ? 'checkbox--selected' : '')} onClick={() => { onToggle(id) }} ></span>
            <span>{text}</span>
            <button type="submit" onClick={() => onRemove(id)}>❌</button>
        </div>
    );
})

export default TodoListItem;