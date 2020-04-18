import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn About React",
      isCompleted: false,
    },
    {
      text: "Meet Friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build cool react app",
      isCompleted: false,
    },
  ]);

  const completeTodo = index => {
    const newTodos = [...todos];
    console.log(newTodos);
    newTodos[index].isCompleted = true
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodo = [...todos]
    newTodo.splice(index, 1)
    setTodos(newTodo);
  }

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  // noinspection BadExpressionStatementJS
  return (
    <div className="app">
      <div className="todo-list">
        {/* eslint-disable-next-line array-callback-return */}
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
