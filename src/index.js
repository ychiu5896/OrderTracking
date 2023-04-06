import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {BrowserRouter} from 'react-router-dom';



////TEST////
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);






///////////Works///////
// ReactDOM.render(<App />, document.getElementById('root'));