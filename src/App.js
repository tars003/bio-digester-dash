import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import  './App.css';

import SingleUnit from './components/SingleUnit';

const App = () => {
  return (
    <Router>
      <>
        <div className="container">
          <Routes>
            <Route exact path="/" element={< SingleUnit />} /> 
          </Routes>
        </div>
      </>
    </Router>
  )
}


export default App;
