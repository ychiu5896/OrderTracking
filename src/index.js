import React from 'react';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';
import {createRoot} from 'react-dom/client';


////TEST////
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);






///////////Works///////
// ReactDOM.render(<App />, document.getElementById('root'));