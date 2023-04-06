import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class ItemDetails extends Component{
  render(){
    return(

      <div className="item">
        <div>
            Date: {this.props.orderlist.date}
        </div>
        <div>
            Order # {this.props.orderlist.order_id}
        </div>
        <div>
           Location:{this.props.orderlist.location}
        </div>
        <div>
            Price:{this.props.orderlist.price}
        </div>
        <div>
            Details:{this.props.orderlist.details}
        </div>
        <button id={this.props.orderlist.order_id} onClick={this.props.deleteData}>Delete</button>
 
        <button>
          <Link to={`/${this.props.orderlist.order_id}`} 
            state={{
              date: this.props.orderlist.date,
              order_id: this.props.orderlist.order_id,
              location: this.props.orderlist.location,
              price: this.props.orderlist.price,
              details:this.props.orderlist.details
            }}
          > 
            Update
          </Link>
        </button>

      </div>
    
    );

  }

}

export default ItemDetails;