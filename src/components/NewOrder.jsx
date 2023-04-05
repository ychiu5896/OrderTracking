import React, {Component} from 'react';



class NewOrder extends Component{

  render(){

    return(
      <div className="itemContainer">
        <div className= "order-input">
          <p>Date:</p>
          <input id='date' type = 'text' onChange={this.props.handleChange}/>
        </div>
        <div className= "order-input">
          <p>Order #:</p>
          <input id='order_id' type = 'text' onChange={this.props.handleChange}/>
        </div>
        <div className= "order-input">
          <p>Location:</p>
          <input  id='location' type = 'text'onChange={this.props.handleChange}/>
        </div>
        <div className= "order-input">
          <p>Price:</p>
          <input id='price' type = 'text'onChange={this.props.handleChange}/>
        </div>
        <div className= "order-input">
          <p>Details:</p>
          <input id='details' type = 'text'onChange={this.props.handleChange}/>
        </div>
        <button onClick={this.props.submitData}>Add Order</button>
      </div>
        
    );

  }

}

export default NewOrder;