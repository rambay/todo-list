import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {
    const { openModal, setOpenModal } = useContext(TodoContext)

    return (
        <div className="iconAddContainer">
            <a style={{ transform: openModal ? 'rotate(45deg)' : 'rotate(0deg)' }} className="iconAdd" onClick={() => setOpenModal(estado => !estado)}>
                <FaPlus />
            </a>
        </div>
    )
}

export { CreateTodoButton }