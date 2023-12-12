import { useContext } from "react"
import { TodoContext } from "../../TodoContext"
import "./TodoSearch.css"

function TodoSearch() {
    const { handleValueSearch, search } = useContext(TodoContext);

    return (
        <input type="text" placeholder="Buscar tareas" name="search" value={search} onChange={handleValueSearch} />
    )
}

export { TodoSearch }