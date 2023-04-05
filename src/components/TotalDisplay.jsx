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
    this.handleChange=this.handleChange.bind(this);
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

  submitData(){
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



  render(){
    return(
      <div>
        <SummaryDisplay count={this.state.count} onClick={this.onClick} submitData={this.submitData} handleChange={this.handleChange}/>
        <OrderItem order={this.state.order}/>
      </div>
    );
  }

}

export default TotalDisplay;