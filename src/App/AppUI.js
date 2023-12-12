import { TodoCounter } from "../componentes/TodoCounter";
import { TodoSearch } from "../componentes/TodoSearch";
import { TodoList } from "../componentes/TodoList";
import { TodoItem } from "../componentes/TodoItem";
import { AddTask } from "../componentes/AddTask";
import { TodosLoading } from "../componentes/TodosLoading";
import { TodosError } from "../componentes/TodosError";
import Skeleton from "react-loading-skeleton";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { CreateTodoButton } from "../componentes/CreateTodoButton";
import { Modal } from "../componentes/Modal";

function AppUI() {
    const { loading, error, searchTodosFilter, onCompletedTodo, onDeleteTodo, openModal } = useContext(TodoContext);

    return (
        <main className='app'>
            <div>
                <AddTask />
            </div>
            <div className="listTasks">
                <h1 className="title">Mis Tareas</h1>
                {loading && <Skeleton style={{ display: 'block', margin: '0 auto', textAlign: 'center' }} width={300} height={25} />}
                {!loading && <TodoCounter />}
                <TodoSearch />

                <TodoList>
                    {loading && (
                        <>
                            <TodosLoading />
                            <TodosLoading />
                            <TodosLoading />
                            <TodosLoading />
                        </>
                    )}
                    {error && <TodosError />}
                    {searchTodosFilter <= 0 && !loading && <p>Crea tu primera tarea</p>}

                    {
                        searchTodosFilter.map(({ task, completed }) => (
                            <TodoItem key={task} task={task} complete={completed} onCompletedTodo={() => onCompletedTodo(task)} onDeleteTodo={() => onDeleteTodo(task)} />
                        ))
                    }
                </TodoList>
                <CreateTodoButton />

                {
                    openModal && (
                        <Modal />
                    )
                }

            </div>
        </main>
    )
}

export { AppUI };