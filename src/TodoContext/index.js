import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
    const { item: todos, loading, error, saveItem: saveTodos } = useLocalStorage('TODOS_V1', []);
    const [valueTodo, setValueTodo] = useState('');
    const [search, setSearch] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const todoCompleted = todos.filter(todo => todo.completed === true).length
    const totalTodos = todos.length

    const percentageCompletedTodos = todoCompleted / totalTodos * 100;

    const handleValueTodo = (ev) => {
        const value = ev.target.value;
        setValueTodo(value);
    }

    const submitTodo = () => {
        saveTodos([...todos, { task: valueTodo, completed: false }])
        setValueTodo('');
    }

    const onCompletedTodo = (task) => {
        const newTodos = [...todos];
        const indexTodo = newTodos.findIndex(todo => todo.task === task);
        newTodos[indexTodo].completed = true;
        saveTodos(newTodos);
    }

    const onDeleteTodo = (task) => {
        const newTodos = [...todos];
        const indexTodo = newTodos.findIndex(todo => todo.task === task);
        newTodos.splice(indexTodo, 1);
        saveTodos(newTodos)
    }

    const handleValueSearch = (ev) => {
        const value = ev.target.value;
        setSearch(value);
    }

    const searchTodosFilter = todos.filter(todo => todo.task.includes(search));

    const clearSearchModalTodo = () => {
        setValueTodo('');
    }

    return (
        <TodoContext.Provider value={{ todoCompleted, totalTodos, searchTodosFilter, submitTodo, handleValueTodo, valueTodo, loading, error, onCompletedTodo, onDeleteTodo, handleValueSearch, search, openModal, setOpenModal, percentageCompletedTodos, clearSearchModalTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };