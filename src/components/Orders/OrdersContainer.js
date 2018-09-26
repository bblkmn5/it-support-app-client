import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchOrders, deleteOrder } from '../../actions/order_actions';
import Order from './Order';
import { bindActionCreators } from 'redux';


class OrdersContainer extends Component {
  componentDidMount() {
    this.props.fetchOrders()
  }

  render() {
    return (
      <div>
        <Table responsive striped bordered condensed hover>
          <thead>
            <tr>
                <th>Order #</th>
                <th>Device</th>
                <th>Location</th>
                <th>Service Type</th>
                <th>Notes</th>
            </tr>
          </thead>
          <Order orders={this.props.orders}
              deleteOrder={this.props.deleteOrder} />
        </Table>
      </div>
    )
  }  
}

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchOrders: fetchOrders,
    deleteOrder: deleteOrder
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);

//need to add delete button to delete order when completed.
  //don't think I need a class/constructor, but arrow function. Else, just render on order page .forEach order.
  //Therefore, do not even need a component for delete. look up lecture for how to add delete button to each instance
  //of an order, then render the current list of orders minus the deleted order without page refresh
  