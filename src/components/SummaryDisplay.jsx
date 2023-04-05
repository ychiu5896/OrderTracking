import React, {Component} from 'react';
import NewOrder from './NewOrder.jsx';

class SummaryDisplay extends Component{

render(){
    return(
        <div className="itemContainer">
            <h1>Summary</h1>
            <button onClick={this.props.onClick}>{this.props.count}</button>
            <h3>Monthly Total</h3>
            <NewOrder />
        </div>
    )
}

}

export default SummaryDisplay;