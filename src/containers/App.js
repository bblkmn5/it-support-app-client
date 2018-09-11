import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch,
  Route } from 'react-router-dom';

import Orders from '../components/Orders';
import OrderService from '../services/OrderService';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import AddOrder from '../components/AddOrder'
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
      //Do NOT like the current layout. Possibly go for 1 page, then clickable links to change what is on page
      //Keep navbar, but make it more bootstrappy. Popup of current orders might be too difficult of a feature
      //at this time. FOLLOW BASIC REQUIREMENTS
      //link to show current orders, with deletion from that page ONLY. link to show home page
      //AddOrder Form will have dropdown for service type, with 'Other' option for user entry, making drop-down disappear.
      //Dropdown for location, full screen text area for notes section. Submit button (basic). After submission, will go to 
      //Index of all orders. Clicking will take to individual order with delete button option and update option. Fiinally, deleting will take user back to index of all orders. 
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>

          {/* <div className="order-container">
            <Orders orders={this.state.orders} />
          </div>
          <div className="main-container">
            <Route exact path="/" component={Home} />
            <AddOrder addOrder={this.addOrder} /> */}
            {/* <Route exact path="/orders" component={Orders} /> */}
          {/* </div>  */}
          {/* <div className="footer-container">
            <p className="small text-muted">©2018 Ben Blackman</p>
          </div> */}
      </Router>
    );
  }
}

export default App;
