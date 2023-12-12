import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const { openModal, setOpenModal } = useContext(TodoContext);

  return (
    <div className="iconAddContainer">
      <a className="iconAdd" onClick={() => setOpenModal((estado) => !estado)}>
        {openModal ? <IoClose /> : <FaPlus />}
      </a>
    </div>
  );
}

export { CreateTodoButton };
