import React, {Component} from 'react';
import OrderItem from './OrderItem.jsx'
import SummaryDisplay from './SummaryDisplay.jsx'

class TotalDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            order: [0,1,2,3,4,5,6,7,8],
        }
        this.onClick = this.onClick.bind(this)
    }

     onClick(){
        this.setState({
            ...this.state, count: this.state.count + 1
        })
    }

    render(){
        return(
            <div>
                <SummaryDisplay count={this.state.count} onClick={this.onClick} />
                <OrderItem order={this.state.order}/>
            </div>
        )
    }

}

export default TotalDisplay;