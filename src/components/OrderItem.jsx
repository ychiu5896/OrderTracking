import React, {Component} from 'react';
import ItemDetails from './ItemDetails.jsx'

class OrderItem extends Component{

    render(){
        console.log(this.props.order)
        let current = [];
        for(let i = 0; i < this.props.order.length; i++){
            current.push(
                <ItemDetails order={this.props.order[i]}/>
           ) 
        }
    
        return(
            <div className="itemContainer">
                {current}
            </div>
    
        )
    }

}

export default OrderItem;