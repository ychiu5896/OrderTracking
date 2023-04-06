import React, {Component} from 'react';
import NewOrder from './NewOrder.jsx';

class SummaryDisplay extends Component{

  render(){
    console.log(this.props);
    return(
      <div className="itemContainer border">
        <h1>Financial Expenditures</h1>
        <h3>Monthly Total</h3>
        <NewOrder submitData={this.props.submitData} handleChange={this.props.handleChange}/>
      </div>
    );
  }

}

export default SummaryDisplay;