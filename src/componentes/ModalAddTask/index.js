import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./ModalAddTask.css";

function ModalAddTask() {
    const { handleValueTodo, valueTodo, submitTodo, clearSearchModalTodo } = useContext(TodoContext);

    return (
        <div className="ModalAddTask">
            <h2 className="ModalAddTask__title">Añadir nueva Tarea</h2>
            <form className="ModalAddTaskForm">
                <textarea className="ModalAddTaskForm__form" onChange={handleValueTodo} value={valueTodo} name="addTask" id="addTask" cols="30" rows="10" placeholder="Leer libro" maxLength={40}></textarea>
                <button className="ModalAddTaskForm__button ModalAddTaskForm__button--clear" onClick={clearSearchModalTodo} type="button">Limpiar</button>
                <button className="ModalAddTaskForm__button ModalAddTaskForm__button--success" onClick={submitTodo} type="button">Añadir tarea</button>
            </form>
        </div>
    )
}

export { ModalAddTask }