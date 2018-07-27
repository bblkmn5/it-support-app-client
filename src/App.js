import React, { Component } from 'react';
import Orders from './components/Orders'
import OrderService from './services/OrderService';
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    OrderService.fetchOrders().then(orders => this.setState({ orders }))
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          {/* <Navbar /> */}
        </div>
        <div className="side-container">
          <Orders orders={this.state.orders}/>
        </div>
        <div className="main-container">
          {/* <Order /> */}
        </div> 
        
      </div>
    );
  }
}

export default App;
