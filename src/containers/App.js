import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch,
  Route } from 'react-router-dom';

import Orders from '../components/Orders/Orders';
import OrderService from '../services/OrderService';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import AddOrder from './Orders/AddOrder'
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
      //link to show current orders, with deletion from that page ONLY. link to show home page
      //AddOrder Form will have dropdown for service type, with 'Other' option for user entry, making drop-down disappear.
      //Dropdown for location, full screen text area for notes section. Submit button (basic). After submission, will go to 
      //Index of all orders. Clicking will take to individual order with delete button option and update option. Fiinally, deleting will take user back to index of all orders. 
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add_order"  component={AddOrder} />
            <Orders orders={this.state.orders} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
