import React, { Component } from 'react';
import './stylesheets/styles.css';
import TotalDisplay from './components/TotalDisplay.jsx';
import { Routes, Route } from 'react-router-dom';
import NewOrder from './components/OrderUpdate.jsx';

// const App = (props) => {
//   return(
//     <div>
//       <TotalDisplay/>
//     </div>
//   );

// };

// export default App;



//////////////////////////TEST///////////////////
const App = (props) => {
  
  return(

    <Routes>
      <Route
        exact
        path="/"
        component={
          () => <TotalDisplay/>
        }
      />
      <Route
        exact
        path="/:id"
        component={
          () => <NewOrder/>
        }
      />

    </Routes>


  );

};

export default App;