import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route } from 'react-router-dom';

import Orders from './components/Orders'
import OrderService from './services/OrderService';
import Navbar from './components/Navbar';
import Home from './components/Home';
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
      <Router>
        <div className="App">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="side-container">
            <Orders orders={this.state.orders} />
          </div>
          <div className="main-container">
            <Route exact path="/" component={Home} />
            <Route exact path="/add_order" component={AddOrder} />
          </div> 
          
        </div>
      </Router>
    );
  }
}

export default App;
