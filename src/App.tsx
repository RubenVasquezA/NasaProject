import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Asteroid from "./components/Asteroid";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {

  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/App" element={<Asteroid  />} />
      </Routes>
    </Router>
  );
}

export default App;
