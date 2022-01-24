import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Cover from "./Components/Cover";
import LoginSuccess from "./Components/LogInSuccess";
import Auth from "./Page/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/login/*" element={<Auth />} />
          <Route path="/login-success" element={<LoginSuccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
