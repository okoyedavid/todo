import Todo from "./components/Todo";
import Navbar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CompletedTodo from "./components/completedTodo";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/completed" element={<CompletedTodo />} />
      </Routes>
    </div>
  );
}

export default App;
