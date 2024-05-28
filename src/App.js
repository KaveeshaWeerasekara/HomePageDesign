import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Import Css & scss
import "./App.scss";
import "./App.css";



//Import Component (Pages) - Client
import Home from "./Pages/Client Panel/Home";



function App() {
  return (
    <BrowserRouter>
      {/* Login & Registation */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      {/* Admin */}

      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
