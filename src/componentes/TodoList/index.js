import "./TodoList.css";

function TodoList({ children }) {
    return (
        <ul className="listaTodos">
            {children}
        </ul>
    )
}

export { TodoList }