import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import ReactTooltip from "react-tooltip";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  const GetTodos = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/todos`);
    setTodos(data);
  };

  useEffect(() => {
    GetTodos();
  }, []);

  const completeTodo = async (id) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/todo/complete/${id}`
    );

    setTodos((todosComplete) =>
      todosComplete.map((todo) => {
        if (todo._id === data._id) {
          todo.complete = data.complete;
          todo.completeDate = moment();
        }

        return todo;
      })
    );
    GetTodos();
  };

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
            <div
              role="presentation"
              className="checkbox"
              onClick={() => completeTodo(todo._id)}
            >
              {" "}
            </div>
            <div
              role="presentation"
              className="text"
              onClick={() => completeTodo(todo._id)}
            >
              {todo.title}
            </div>
            <Link to={`/detail/${todo._id}`}>
              <p data-tip="See more">
                <ReactTooltip />
                <div className="more_todo">...</div>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTodo;
