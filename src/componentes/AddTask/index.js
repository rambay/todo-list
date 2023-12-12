import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./AddTask.css";

function AddTask() {
    const { handleValueTodo, valueTodo, submitTodo, openModal } = useContext(TodoContext);

    return (
        <div className="addTask">
            <h2>Crear una nueva tarea</h2>
            <form>
                <textarea onChange={handleValueTodo} name="" id="" cols="30" rows="10" value={valueTodo} placeholder="Leer un libro" maxLength={60}></textarea>
                <button onClick={submitTodo} type="button">Añadir tarea</button>
            </form>
            <img className="imageAddTask" src="./writeTodo.webp" alt="TodoAdd" />
        </div>
    )
}

export { AddTask };