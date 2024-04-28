import Todo from "./components/Todo";
import Navbar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CompletedTodo from "./components/completedTodo";
import { useState } from "react";

function App() {
  const [completedTodos, setCompletedTodos] = useState(() => {
    const storedTodos = localStorage.getItem("completedTodos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Todo
              completedTodos={completedTodos}
              setCompletedTodos={setCompletedTodos}
            />
          }
        />
        <Route
          path="/completed"
          element={
            <CompletedTodo
              completedTodos={completedTodos}
              setCompletedTodos={setCompletedTodos}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
