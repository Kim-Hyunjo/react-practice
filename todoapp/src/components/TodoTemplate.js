import React from "react";

const TodoTemplate = (({ children }) => {
    return (
        <div>
            <div>TODO!</div>
            <div>{children}</div>
        </div>
    );
})

export default TodoTemplate;