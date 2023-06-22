import {useParams} from 'react-router-dom';
import React from 'react'
import OrderUpdate from './OrderUpdate.jsx';

function Params(){
    let {id} = useParams();
    return(
        <div>
            <OrderUpdate id={id}/>
        </div>
    )
}
export default Params;