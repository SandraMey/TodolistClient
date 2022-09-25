/* eslint-disable consistent-return */
import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ModalAddTodo = ({ setPopupActive, setTodos, todos }) => {
  const [newTodo, setNewTodo] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const addTodo = async () => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/todo/new`,
      {
        title: newTodo,
        description: newDesc,
      }
    );
    setTodos([...todos, data]);
    setPopupActive(false);
    setNewTodo("");
    setNewDesc("");
  };

  return (
    <div className="popup">
      <div
        role="presentation"
        className="closePopup"
        onClick={() => setPopupActive(false)}
      >
        x
      </div>
      <form onSubmit={addTodo}>
        <div className="content">
          <h3>Add Task</h3>
          <div className="title">
            <label htmlFor="title" className="container_label">
              Title :
              <input
                type="title"
                className="add_todo_input"
                onChange={(e) => setNewTodo(e.target.value)}
                value={newTodo}
                required
              />
            </label>
          </div>
          <label htmlFor="description" className="container_label">
            Description :
            <textarea
              type="description"
              className="add_todo_input"
              onChange={(e) => setNewDesc(e.target.value)}
              value={newDesc}
            />
          </label>
          <button className="button" type="submit">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalAddTodo;

ModalAddTodo.propTypes = {
  setPopupActive: PropTypes.func.isRequired,
  setTodos: PropTypes.func.isRequired,
  todos: PropTypes.func.isRequired,
};
