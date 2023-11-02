import React, { useState } from "react";
import "./todo.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodo] = useState<Todo[]>([]);
  const [newList, setNewList] = useState<string>("");

  const handleAdd = () => {
    if (!newList) return;

    const newTodo: Todo = {
      id: todos.length + 1,
      text: newList,
      completed: false,
    };

    setTodo([...todos, newTodo]);
    setNewList("");
  };

  const handleDelete = (id: number) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);

    setTodo(deleteTodo);
  };

  const handleDone = (id: number) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    setTodo(updatedTodo);
  };

  return (
    <div className="container">
      <div className="todo-list">
        <div className="todo-input">
          <h1>Todo List</h1>
          <input
            type="text"
            value={newList}
            onChange={(e) => setNewList(e.target.value)}
          />
          <button onClick={handleAdd}>Add</button>
        </div>

        <div className="new-list">
          <ul className="new-todo">
            {todos.map((todo) => (
              <li className="added-todo" key={todo.id}>
                <span
                  className="todo-text"
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
                <div className="buttons">
                  <button
                    className="deletebtn"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="donebtn"
                    onClick={() => handleDone(todo.id)}
                  >
                    Done
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
