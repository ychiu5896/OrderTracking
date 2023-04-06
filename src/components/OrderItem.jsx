import React, {Component} from 'react';
import ItemDetails from './ItemDetails.jsx';

class OrderItem extends Component{

  render(){

    const current = [];
    for(let i = 0; i < this.props.order.length; i++){
      current.push(
        <ItemDetails key={i} index={i} deleteData={this.props.deleteData} orderlist={this.props.order[i] }/>
      ); 
    }
    
    return(
      <div className="itemContainer">
        {current}
      </div>
    );
  }

}

export default OrderItem;