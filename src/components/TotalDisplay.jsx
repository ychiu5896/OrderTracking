import React, {Component} from 'react';
import OrderItem from './OrderItem.jsx';
import SummaryDisplay from './SummaryDisplay.jsx';

class TotalDisplay extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      order: [],
      newData: {
        date:'',
        order_id:0,
        location:'',
        price:0,
        details:''
      }
    };
    this.onClick = this.onClick.bind(this);
    this.submitData = this.submitData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.totalCount = this.totalCount.bind(this);

  }

  handleChange(e){
    const {id} = e.target;
    console.log(id);
    const {value} = e.target;
    console.log(value);
    this.setState({
      ...this.state,newData:{...this.state.newData,[id]:value}
    });
    console.log(this.state.newData);
  }

  onClick(){
    this.setState({
      ...this.state, count: this.state.count + 1
    });
  }

  componentDidUpdate(){
    let total = 0;
    for(const current of this.state.order){
      total+=current.price;
    }
    if(this.state.count !== total) {
      this.setState({...this.state,count:total});
    }
  }

  componentDidMount(){
    fetch('/orders/')
      .then((res) => res.json())
      .then((data) =>{
        return this.setState({
          ...this.state, order: data
        });
      })
      .catch((err) => console.log('Component Did not Mount, get Order ran into an error:',err));
  }

  totalCount (value){
    console.log(value);
    this.setState({...this.state,count:value});
  }

  submitData(){
    // --------- ADD DATA TO FRONT END ---------------

    const newState = this.state.order.unshift(this.state.newData);
    this.setState({...newState});



    // ------ADD DATA TO BACK END ------------
    fetch('/orders/',{
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(this.state.newData)
    })
      .then((res) => res.json())
      .then((data)=>console.log(data))
      .catch((err)=>{
        console.log('Posting data ran into an error:',err);
      });
  }

  deleteData(e){
    console.log(e.target.id);
    const id = e.target.id;
    // --------------- DELETE FOR FRONT END -----------------------
    const newOrder = [...this.state.order];
    // Traverse the copy of the order array
    for (const i in newOrder){
      // Find the index where the order_id match with the e.target.id
      if (newOrder[i].order_id == e.target.id) {
        newOrder.splice(i,1);
      }
    }
 
    this.setState({
      ...this.state, order: newOrder
    });
    // --------------- DELETE FOR BACKEND -------------------------
    fetch('/orders/',{
      method:'DELETE',
      headers:{
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify({order_id: Number(e.target.id)})
    }
    ).then((res) => res.json())
      .then((data)=> console.log(e.target.id))
      .catch((err)=>{
        console.log('Deleting data ran into an error:',err);
      });
  }





  render(){
    return(
      <div className='outside_container'>
        <button className='google-icon' >Google</button>
        <SummaryDisplay count={this.state.count} order={this.state.order} onClick={this.onClick} submitData={this.submitData} handleChange={this.handleChange}/>
        <OrderItem totalCount = {this.state} order={this.state.order} deleteData={this.deleteData}/>
      </div>
    );
  }

}

export default TotalDisplay;