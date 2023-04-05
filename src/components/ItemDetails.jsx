import React, {Component} from 'react';


class ItemDetails extends Component{

  render(){
    return(

      <div className="item">
        <img src='../images/dots.png'/>
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
      </div>
    );

  }

}

export default ItemDetails;