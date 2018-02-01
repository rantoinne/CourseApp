import React, { Component} from 'react';

class Purchase extends Component {

  expense(price){
    this.setState({totalamount: this.state.totalamount + price});
  }

  constructor(props){
    super(props);

    this.state = {
      totalamount: 0
    };
    this.expense = this.expense.bind(this);
  }

  render(){
    console.log(this.props.sendit);
    var recieve = this.props.sendit.map((item,i) => {
      return <Courses name={item.name} price={item.price} key={i} expense={this.expense} active={item.active} />
    });

    return(
      <div>
      <div id="trance">
       Select Courses of your choice
      </div>
      <div id="book">
      {recieve}
      <p className = {this.state.active ? 'active' : '' } id="cost">Total :<b>Rs. {this.state.totalamount}</b></p>
      </div>
      </div>
    );
  }
}

class Courses extends Component {

  constructor(props){
    super(props);

    this.state = {
      active: false
    };
    this.tap = this.tap.bind(this);
  }

  tap(){
    var active = !this.state.active;
    this.setState({active: active})
    this.props.expense(active ? this.props.price : -this.props.price);
  }

  render(){
    return(
      <div>
      <p onClick={this.tap}>{this.props.name} <b>{this.props.price}</b>
      </p>
      </div>
    );
  }
}

export default Purchase;
