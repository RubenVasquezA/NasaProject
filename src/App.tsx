import React, { useState } from 'react';
import axios from "axios";
import './App.css';
import { INearEarthObjects, IListAsteroids } from "./interface/spreadSheet"
import Header from "./components/Header";
import Asteroid from "./components/Asteroid";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {

  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Asteroid />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
