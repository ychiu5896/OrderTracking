import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
    const {id} = e.target;
    console.log(id);
    const {value} = e.target;
    console.log(value);
    this.setState({
      newData:{...this.state.newData,[id]:value}
    });
    console.log(this.state.newData);
  }

  componentDidMount(){
    const {id} = this.props.match.params;
    console.log(id);
    fetch(`/update/${id}`)
      .then((res) => res.json())
      .then((data) =>{
        return this.setState({newData:data[0]
        });
      })
      .catch((err) => console.log('Component Did not Mount, get Order ran into an error:',err));
  }

  submitUpdate(){
    const {id} = this.props.match.params;
    fetch(`/update/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify([this.state.newData])
    })
      .then((res) => res.json())
      .then((data)=>console.log(data))
      .catch((err)=>{
        console.log('Posting data ran into an error:',err);
      });
  }


  render(){
    console.log(this.props);
   

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
          <Link to={'/'}>
                Update Order
          </Link>
        </button>
      </div>
    );

  }
}



export default withRouter(OrderUpdate);