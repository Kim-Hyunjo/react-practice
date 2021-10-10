import { useCallback, useRef, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트 공부하기',
            checked: true,
        },
        {
            id: 2,
            text: 'Todo 앱 만들기',
            checked: false,
        }
    ])

    const nextId = useRef(3);

    const onInsert = useCallback((text) => {
        const todo = {
            id: nextId.current,
            text: text,
            checked: false,
        };
        setTodos([...todos, todo]);
        nextId.current += 1;
    }, [todos])
    return (
        <TodoTemplate>
            <TodoInput onInsert={onInsert} />
            <TodoList todos={todos} />
        </TodoTemplate>
    );
}

export default App;