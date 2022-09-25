import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ListTodo from "./routes/ListTodo";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListTodo />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
