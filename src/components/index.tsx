import React from 'react';
import {createRoot} from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from '../App';
import TotalDisplay from './TotalDisplay.jsx';
import OrderUpdate from './OrderUpdate.jsx';


const domNode = document.getElementById('root')!;
const root = createRoot(domNode)

root.render(
    <BrowserRouter>
        <App />
        <Routes>
            <Route path='/' element={<TotalDisplay />}/>
            <Route path='/:id' element={<OrderUpdate />}/>
        </Routes>
    </BrowserRouter>

)


