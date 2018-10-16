import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import OrderForm from './components/Orders/OrderForm';
import OrdersContainer from './components/Orders/OrdersContainer';

import './App.css';

const App = () => {
  return (
    //AddOrder Form will have dropdown for service type, with 'Other' option for user entry, making drop-down disappear.
    //Dropdown for location, full screen text area for notes section. Submit button (basic). After submission, will go to 
    //Index of all orders. Clicking will take to individual order with delete button option and update option. Fiinally, deleting will take user back to index of all orders. 
    <div> 
      <Layout>
        <Switch>
          <Route exact path="/" component={OrdersContainer} />
          <Route exact path="/add_order"  component={OrderForm} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Layout>
    </div> 
  )
}

export default App;
