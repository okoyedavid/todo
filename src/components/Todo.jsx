import React, { useState, useEffect, useRef } from "react";
import { v4 as uuid4 } from "uuid";
import TodoList from "./todoList";
import AddTodo from "./addTodo";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [render, setrender] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [edit, setEdit] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue === "") return;
    const newTodo = { title: inputValue, _id: uuid4(), toEdit: false };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleEdit = (movie, id) => {
    setrender(true);
    setInputValue(movie);
    const editId = id;
    setEdit(editId);

    const newTodo = todos.map((todo) => {
      if (todo._id === id) return { ...todo, toEdit: true };
      return { ...todo, toEdit: false };
    });

    setTodos(newTodo);
  };

  const handleCancel = (id) => {
    setrender(false);
    setInputValue("");
    setEdit("");
    const newTodo = todos.map((todo) => {
      if (todo._id === id) return { ...todo, toEdit: false };
      return { ...todo };
    });

    setTodos(newTodo);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();

    const newTodo = todos.map((todo) => {
      if (todo._id === edit)
        return { ...todo, title: inputValue, toEdit: false };
      return { ...todo };
    });

    setTodos(newTodo);
    setrender(false);
    setInputValue("");
  };

  const handleDelete = (movie) => {
    const NewTodos = todos.filter((todo) => todo._id !== movie);
    setTodos(NewTodos);
  };
  return (
    <React.Fragment>
      <main className="container">
        <AddTodo
          todos={todos}
          render={render}
          handleSubmit={handleSubmit}
          handleEditSubmit={handleEditSubmit}
          handleChange={handleChange}
          inputValue={inputValue}
          edit={edit}
          inputRef={inputRef}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleCancel={handleCancel}
        />
      </main>
    </React.Fragment>
  );
};

export default Todo;
