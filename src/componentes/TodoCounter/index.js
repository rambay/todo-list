import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
    const { todoCompleted, totalTodos, percentageCompletedTodos } = useContext(TodoContext);

    return (
        <div className="TodoCounter">
            {
                totalTodos > 0 ? todoCompleted === totalTodos ? <p>Has completado todas las tareas. Felicitaciones 👍</p> :
                    <div className="pogress-completedTodos">
                        <p className="pogress-completedTodos__subtitle">Has completado</p>
                        <p className="pogress-completedTodos__title">{`${todoCompleted} / ${totalTodos} Tareas`}</p>
                        <div className="pogress-completedTodos__bar">
                            <span style={{ width: percentageCompletedTodos + '%', transition: '1.5s ease' }} className="progreessActive"></span>
                        </div>
                    </div>
                    :
                    <p>Tu lista de tareas esta vacia.</p>
            }
        </div>
    )
}

export { TodoCounter }