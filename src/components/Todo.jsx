import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [completed, setCompleted] = useState(false);
  const [completedTodo, setCompletedTodo] = useState([]);

  const handleChange = (event, id) => {
    setInputValue(event.target.value);

    setCompleted(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let id = 0;
    if (inputValue === "") return;
    const newTodo = { title: inputValue, _id: uuid4() };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleDelete = (movie) => {
    const NewTodos = todos.filter((todo) => todo._id !== movie);
    setTodos(NewTodos);
  };
  return (
    <React.Fragment>
      <main className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="Todo" className="form-label">
            Todo
          </label>
          <div className="mb-3">
            <div className="row">
              <div className="col-8">
                <input
                  type="text"
                  value={inputValue}
                  className="form-control"
                  onChange={handleChange}
                  id="Todo"
                  placeholder="what would you you like to do today"
                />
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-primary">
                  Add Todo
                </button>
              </div>
            </div>
          </div>
        </form>

        <div>
          <ul className="list-group list-group-flush">
            {todos.map((todo) => (
              <li key={todo._id} className="list-group-item m-3">
                <input
                  className="form-check-input me-2 m-3 check"
                  type="checkbox"
                  onChange={handleChange}
                  checked={completed}
                  value={todo.title}
                  id={todo._id}
                />

                <label
                  className="form-check-label m-3
                "
                  htmlFor="firstCheckbox"
                >
                  {todo.title}
                </label>

                <button
                  onClick={() => handleDelete(todo._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Todo;
