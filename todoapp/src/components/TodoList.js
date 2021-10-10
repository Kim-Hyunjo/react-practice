import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
    return (
        <div className="todoList">
            {
                todos.map((e) =>
                    <TodoListItem todo={e} key={e.id} />
                )
            }
        </div>
    );
};

export default TodoList;