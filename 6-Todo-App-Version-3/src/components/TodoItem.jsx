import { MdDeleteOutline } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row b-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>

        <div className="col-2">
          <button
            type="button"
            className=" btn-danger b-Button"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
