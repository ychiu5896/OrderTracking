import React, { Component } from 'react';
import {useLocation} from 'react-router-dom';


class OrderUpdate extends Component {
  
  render(){
    const location = useLocation();
    const state = location.state;

    return(
      <div className="itemContainer">
        <div className= "order-input">
          <p>Date:</p>
          <input id='date' type = 'text'/>
        </div>
        <div className= "order-input">
          <p>Order #:</p>
          <input id='order_id' type = 'text' />
        </div>
        <div className= "order-input">
          <p>Location:</p>
          <input  id='location' type = 'text'/>
        </div>
        <div className= "order-input">
          <p>Price:</p>
          <input id='price' type = 'text'/>
        </div>
        <div className= "order-input">
          <p>Details:</p>
          <input id='details' type = 'text'/>
        </div>
        <button >Add Order</button>
      </div>
        
    );

  }



  }


}





export default OrderUpdate;