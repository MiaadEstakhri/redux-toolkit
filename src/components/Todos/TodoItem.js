import React from "react";
import { useDispatch } from "react-redux";
import {
  deletedAsyncTodos,
  toggleCompletedAsync,
} from "../../features/todo/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={(e) =>
              dispatch(
                toggleCompletedAsync({ id, completed: !completed, title })
              )
            }
          />
          {title}
        </span>
        <button
          className="btn btn-danger"
          onClick={(e) => dispatch(deletedAsyncTodos({ id }))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
