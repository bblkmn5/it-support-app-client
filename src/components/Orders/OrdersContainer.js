import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchOrders, setCurrentOrder, updateOrder, deleteOrder } from '../../actions/order_actions';
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
    setCurrentOrder: setCurrentOrder,
    updateOrder: updateOrder,
    deleteOrder: deleteOrder
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
  