import { useCallback, useRef, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트 공부하기',
            checked: false,
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

    const onRemove = useCallback((id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }, [todos]);

    const onToggle = useCallback((id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
    }, [todos]);

    return (
        <TodoTemplate>
            <TodoInput onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
}

export default App;