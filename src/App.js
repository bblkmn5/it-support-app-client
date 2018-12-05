import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import OrdersContainer from './components/Orders/OrdersContainer';
import TechniciansContainer from './components/Technicians/TechniciansContainer';

import './App.css';

const App = () => {
  return (
    <div> 
      <Layout>
        <Switch>
          <Route exact path="/" component={OrdersContainer} />
          <Route exact path="/technicians"  component={TechniciansContainer} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Layout>
    </div> 
  )
}

export default App;
