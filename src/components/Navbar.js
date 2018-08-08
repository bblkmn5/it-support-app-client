import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// const Home = () => (
//   <div>
//     <h2>Welcome to the Home Page!</h2>
//   </div>
// )

// const Orders = () => (
//   <div>
//     <h2>My Orders</h2>
//   </div>
// )

// const AddOrders = () => (
//   <div>
//     <h2>Add an Order</h2>
//   </div>
// )

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/orders">My Orders</NavLink>
          <NavLink to="/add_order">Add Order</NavLink>
        </div>
      </Router>
    );
  };
};

export default Navbar;
