import React, {Component} from 'react';



class NewOrder extends Component{

  render(){
    console.log(this.props.count);
    return(
      <div className="itemContainer">
        <div className='order-input'>
          <h3>Monthly Total:</h3>
          <h3> $ {this.props.count}.00</h3>
        </div>
        <div className= "order-input">
          <p>Date:</p>
          <input className='input_box' id='date' type = 'text' onChange={this.props.handleChange}/>
        </div>
        <div className= "order-input">
          <p>Order #:</p>
          <input className='input_box' id='order_id' type = 'text' onChange={this.props.handleChange}/>
        </div>
        <div className= "order-input">
          <p>Location:</p>
          <input className='input_box' id='location' type = 'text'onChange={this.props.handleChange}/>
        </div>
        <div className= "order-input">
          <p>Price:</p>
          <input  className='input_box' id='price' type = 'text'onChange={this.props.handleChange}/>
        </div>
        <div className= "order-input">
          <p>Details:</p>
          <input className='input_box' id='details' type = 'text'onChange={this.props.handleChange}/>
        </div>
        <button onClick={this.props.submitData}>Add Order</button>
      </div>
        
    );

  }

}

export default NewOrder;