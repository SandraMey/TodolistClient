import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ListTodo from "./routes/ListTodo";
import DetailView from "./routes/DetailView";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListTodo />} />
        <Route path="/detail/:id" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
