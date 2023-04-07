import React, {Component} from 'react';
import NewOrder from './NewOrder.jsx';

class SummaryDisplay extends Component{

  render(){

    return(
      <div className="itemContainer border">
        <h1>Financial Expenditures</h1>
   
        <NewOrder count={this.props.count} order={this.props.order} submitData={this.props.submitData} handleChange={this.props.handleChange}/>
      </div>
    );
  }

}

export default SummaryDisplay;