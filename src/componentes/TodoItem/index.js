import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import "./TodoItem.css";

function TodoItem({ task, complete, onCompletedTodo, onDeleteTodo }) {
  return (
    <li className="listItems">
      <span onClick={onCompletedTodo} className={`iconTodoItem ${complete && 'backIconCheck'}`}>
        {
          complete && <FaCheck />
        }
      </span>
      <p className={`${complete && "todoCompleted"}`}>{task}</p>
      <span className="delIcon" onClick={onDeleteTodo}>
        <IoClose />
      </span>
    </li>
  );
}

export { TodoItem }