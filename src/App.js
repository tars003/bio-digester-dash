import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import  './App.css';

import SingleUnit from './components/SingleUnit';
import AllUnit from './components/AllUnit';


const App = () => {
  return (
    <Router>
      <>
        <div className="container">
          <Routes>
            <Route exact path="/unit/:unitId" element={< SingleUnit />} /> 
            <Route exact path="/dash" element={< AllUnit />} /> 
          </Routes>
        </div>
      </>
    </Router>
  )
}


export default App;
