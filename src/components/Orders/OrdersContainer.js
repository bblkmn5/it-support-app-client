import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import Modal from 'react-modal';
import { fetchOrders, setCurrentOrder, updateOrder, deleteOrder } from '../../actions/order_actions';
import Order from './Order';
import OrderForm from './OrderForm'
import { bindActionCreators } from 'redux';

Modal.setAppElement('div');

class OrdersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

  }
  componentDidMount() {
    this.props.fetchOrders()
  }

  setOrder = id => this.props.setCurrentOrder(id)
  onUpdate = id => this.props.updateOrder(id)
  onDelete = id => this.props.deleteOrder(id)
  handleOpenModal = () => this.setState({showModal: true})
  handleCloseModal = () => this.setState({showModal: false})

  handleRowClick = id => {
    this.setOrder(id)
    this.handleOpenModal(id)
  }

  render() {
    let renderedOrders = this.props.orders.map(order => <Order key={order.id} order={order} onClick={this.handleRowClick} onUpdate={this.onUpdate} onDelete={this.onDelete} />)
    const emptyMessage = ( <tr><td>There are no orders!</td></tr> )
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
          <tbody>
           {renderedOrders.length === 0 ? emptyMessage : renderedOrders}
          </tbody>
        </Table>
        <Modal 
          isOpen={this.state.showModal}
          contentLabel="Modal"
          onRequestClose={this.handleCloseModal}>
          <h1>View/Edit Order</h1>
          <button className="modal-button" onClick={this.handleCloseModal}>X</button>
          <OrderForm order={this.props.setCurrentOrder} onSubmit={this.props.addOrder}/>
        </Modal>
      </div>
    )
  }  
}

const mapStateToProps = state => {
  return {
    orders: state.orders.orders,
    currentOrder: state.orders.currentOrder,
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
  