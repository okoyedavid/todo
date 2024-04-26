import React from "react";
import {
  renderButton,
  renderInput,
  renderLabel,
} from "../features/utils/input";

const TodoList = ({ todos, handleChange, handleDelete, handleEdit }) => {
  return (
    <div>
      <ul className="list-group list-group-flush">
        {todos.map((todo) => (
          <li key={todo._id} className="list-group-item m-3">
            <div className="input-container">
              {renderInput(
                "checkbox",
                todo,
                handleChange,
                todo._id,
                "form-check-input me-2 m-3"
              )}

              {renderLabel(todo.title, todo._id, "form-check-label m-3")}
            </div>
            <div className="button-container">
              {renderButton("Edit", "btn-secondary m-2", () =>
                handleEdit(todo.title)
              )}

              {renderButton("Delete", "btn-danger m-2", () =>
                handleDelete(todo._id)
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
