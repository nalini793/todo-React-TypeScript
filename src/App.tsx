import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App" >
      <span className="heading">TODO LIST</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      <span className="credit">
        Background photo by <a href="https://unsplash.com/@woods?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joe Woods</a> on <a href="https://unsplash.com/s/photos/wall?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </span>
    </div>
  );
};

export default App;