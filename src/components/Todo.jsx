import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = { title: inputValue };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };
  return (
    <React.Fragment>
      <main className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Todo" className="form-label">
              Todo
            </label>
            <input
              type="text"
              value={inputValue}
              className="form-control"
              onChange={handleChange}
              id="todos"
              placeholder="what would you you like to do today"
              aria-describedby="emailHelp"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </form>

        <div>
          <ul className="list-group list-group-flush">
            {todos.map((todo) => (
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  id="firstCheckbox"
                />

                <label className="form-check-label" htmlFor="firstCheckbox">
                  {todo.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Todo;
