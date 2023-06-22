import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import {useLocation} from 'react-router-dom';


class OrderUpdate extends Component {
  constructor(props){
    super(props);
    this.state = {
      newData: {
        date:'',
        order_id:0,
        location:'',
        price:0,
        details:''
      }
    };
    this.handleChange=this.handleChange.bind(this);
    this.submitUpdate=this.submitUpdate.bind(this);
  }
  

  handleChange(e){
    const {id} = e.target;;
    const {value} = e.target;
    this.setState({
      newData:{...this.state.newData,[id]:value}
    });
  }

  componentDidMount(){
    console.log(this.props)
    const {id} = this.props;
    fetch(`/update/${id}`)
      .then((res) => res.json())
      .then((data) =>{
        return this.setState({newData:data[0]
        });
      })
      .catch((err) => console.log('Component Did not Mount, get Order ran into an error:',err));
  }

  submitUpdate(){
    const {id} = this.props;
    fetch(`/update/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify([this.state.newData])
    })
      .then((res) => res.json())
      .then((data)=> window.location.href='/')
      .catch((err)=>{
        console.log('Posting data ran into an error:',err);
      });
  }


  render(){
   

    return(
      <div className="updateContainer">
        <div className= "order-input">
          <p>Date:</p>
          <input id='date' type = 'text' value={this.state.newData.date} onChange={this.handleChange}/>
        </div>
        <div className= "order-input">
          <p>Order #:</p>
          <input id='order_id' type = 'text'  value={this.state.newData.order_id} onChange={this.handleChange}/>
        </div>
        <div className= "order-input">
          <p>Location:</p>
          <input  id='location' type = 'text'  value={this.state.newData.location} onChange={this.handleChange}/>
        </div>
        <div className= "order-input">
          <p>Price:</p>
          <input id='price' type = 'text'  value={this.state.newData. price} onChange={this.handleChange}/>
        </div>
        <div className= "order-input">
          <p>Details:</p>
          <input id='details' type = 'text'  value={this.state.newData.details} onChange={this.handleChange}/>
        </div>
        <button className= 'update_button' onClick={this.submitUpdate}>
                Update Order
        </button>
      </div>
    );

  }
}



export default OrderUpdate;