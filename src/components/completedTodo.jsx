import React, { useEffect } from "react";
import { renderButton, renderLabel } from "../features/utils/input";

const CompletedTodo = ({ completedTodos, setCompletedTodos }) => {
  useEffect(() => {
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [completedTodos]);

  const handleDelete = (id) => {
    const newCompletedTodos = completedTodos.filter((m) => m._id !== id);
    setCompletedTodos(newCompletedTodos);
  };

  return (
    <main className="container">
      {completedTodos.length > 0
        ? renderLabel(
            <h2>Completed Todos</h2>,
            "completed",
            "form-check-label m-3"
          )
        : renderLabel(
            <h3>There are no Completed Todos</h3>,
            "completed",
            "form-check-label m-3"
          )}

      <ul className="list-group list-group-flush">
        {completedTodos.length > 0 && (
          <span>showing {completedTodos.length} completed todos</span>
        )}
        {completedTodos.map((todo) => (
          <li key={todo._id} className="list-group-item m-3">
            <div className="input-container">
              {renderLabel(todo.title, todo._id, "form-check-label m-3")}
            </div>
            <div className="button-container">
              <sub className="subscript text-primary">
                Marked completed: {todo.time}
              </sub>

              {renderButton("Delete", "btn-danger m-2", () =>
                handleDelete(todo._id)
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CompletedTodo;
