import React, { useCallback, useState } from "react";

const TodoInput = (({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        onInsert(value);
        setValue('');

        e.preventDefault();
    },
        [onInsert, value]
    );

    return (
        <form className="todoInput__form" onSubmit={onSubmit}>
            <input placeholder="todo" value={value} onChange={onChange} />
            <button type="submit" onSubmit={onsubmit}>add</button>
        </form>
    );
})

export default TodoInput;