import React, {Component} from 'react';


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
        <button>Update</button>
      </div>
    );

  }

}

export default ItemDetails;