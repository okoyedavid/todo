import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";
import {
  renderInput,
  renderButton,
  renderLabel,
} from "../features/utils/input";
import TodoList from "./todoList";
import AddTodo from "./addTodo";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [completedTodo, setCompletedTodo] = useState([]);

  const handleChange = (event, id) => {
    setInputValue(event.target.value);
    //const checked = todos.filter((todo) => {
    //  if (todo._id === id) setTodos([{ ...todos, completed: true }]); });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue === "") return;
    const newTodo = { title: inputValue, _id: uuid4() };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleEdit = (movie) => {
    setInputValue(movie);
  };

  const handleDelete = (movie) => {
    const NewTodos = todos.filter((todo) => todo._id !== movie);
    setTodos(NewTodos);
  };
  return (
    <React.Fragment>
      <main className="container">
        <AddTodo
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          inputValue={inputValue}
        />
        <TodoList
          todos={todos}
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </main>
    </React.Fragment>
  );
};

export default Todo;
