import React, { useState, useEffect } from "react";
import axios from "axios";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  const GetTodos = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/todos`);
    setTodos(data);
  };

  useEffect(() => {
    GetTodos();
  }, []);

  return (
    <div className="App">
      <h1>Welcome</h1>
      <h4>Your tasks</h4>
      <div className="todos">
        <div className="todo">
          <div role="presentation" className="text">
            Todo done
          </div>
        </div>
        <div className="todo is_complete">
          <div role="presentation" className="text">
            Todo not done
          </div>
        </div>
        {todos.map((todo) => (
          <div
            className={`todo${todo.complete ? " is_complete" : ""}`}
            key={todo._id}
          >
            <div role="presentation" className="text">
              {todo.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTodo;