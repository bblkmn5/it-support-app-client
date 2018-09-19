import React, { Component } from 'react';
import {
  Switch,
  Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import OrderForm from './components/Orders/OrderForm';
import OrdersContainer from './components/Orders/OrdersContainer';

import './App.css';


class App extends Component {
  render() {

    return (
      //link to show current orders, with deletion from that page ONLY. link to show home page
      //AddOrder Form will have dropdown for service type, with 'Other' option for user entry, making drop-down disappear.
      //Dropdown for location, full screen text area for notes section. Submit button (basic). After submission, will go to 
      //Index of all orders. Clicking will take to individual order with delete button option and update option. Fiinally, deleting will take user back to index of all orders. 
      <div> 
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add_order"  component={OrderForm} />
            <Route exact path="/orders" component={OrdersContainer} />
          </Switch>
        </Layout>
      </div> 
    )
  }
}

export default App;
