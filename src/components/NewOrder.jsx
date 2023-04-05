import React, {Component} from 'react';



class NewOrder extends Component{

    render(){

        return(
            <div className="itemContainer">
                 <div className= "order-input">
                    <p>Date:</p>
                    <input type = 'text'/>
                </div>
                <div className= "order-input">
                    <p>Order #:</p>
                    <input type = 'text'/>
                </div>
                <div className= "order-input">
                    <p>Location:</p>
                    <input type = 'text'/>
                </div>
                <div className= "order-input">
                    <p>Price:</p>
                    <input type = 'text'/>
                </div>
                <div className= "order-input">
                    <p>Details:</p>
                    <input type = 'text'/>
                </div>
                <button>Add Order</button>
            </div>
        
            )

    }

}

export default NewOrder;