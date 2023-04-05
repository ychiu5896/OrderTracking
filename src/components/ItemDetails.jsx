import React, {Component} from 'react';

 class ItemDetails extends Component{

render(){
    return(

    <div className="item">
        <div>
            Date
        </div>
        <div>
            Order # {this.props.order}
        </div>
        <div>
           Location   
        </div>
        <div>
            Price
        </div>
        <div>
            Details
        </div>
    </div>
    )

}

}

export default ItemDetails;