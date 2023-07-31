import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "./context/LoginContext";
import Navbar from "./components/common/Navbar";
import Home from "./components/common/Home";


function App() {
  const [userLogin, setUserLogin] = useState(false);
  return (
    <BrowserRouter>
      <LoginContext.Provider
        value={{setUserLogin}}
      >
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <ToastContainer theme="dark" />
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;