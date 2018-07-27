import React, { Component } from 'react';
import Orders from './components/Orders'
import OrderService from './services/OrderService';
import AddOrder from './components/AddOrder'
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

  addOrder = order => {
    OrderService.createOrder(order).then(order => this.setState({
      orders: this.state.orders.concat(order)
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          {/* <Navbar /> */}
        </div>
        <div className="side-container">
          <Orders orders={this.state.orders} />
        </div>
        <div className="main-container">
          <AddOrder addOrder={this.addOrder} />
        </div> 
        
      </div>
    );
  }
}

export default App;
