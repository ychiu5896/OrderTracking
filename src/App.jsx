import React, { Component } from 'react';
import './stylesheets/styles.css';
import TotalDisplay from './components/TotalDisplay.jsx';
import { Routes, Route } from 'react-router-dom';
import NewOrder from './components/OrderUpdate.jsx';



//////////////////////////TEST///////////////////
const App = (props) => {
  return(
  <div>
    <Routes>
      <Route path="/" element={<TotalDisplay/>}/>
      <Route path="/:id"element={<NewOrder/>}/> 
    </Routes>
  </div>
  );
};

export default App;