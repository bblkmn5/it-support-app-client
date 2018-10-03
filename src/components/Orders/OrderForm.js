import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createOrder, updateOrder } from '../../actions/order_actions'

class OrderForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      device: '',
      service: '',
      location: '',
      notes: '',
      currentOrder: {}
    }
  }

  componentDidMount() {
    this.setState({
      ...this.props.order
    })
  }

  componentWillMount() {
    this.handleOrder()
  }

  handleOrder() {
    const currentOrder = this.props.currentOrder
    const initialData = this.setState({
      device: currentOrder.device,
      "service": currentOrder.service,
      "location": currentOrder.location,
      "notes": currentOrder.notes
    })
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    if(this.state.id === undefined) { 
      this.props.createOrder(this.state)
     } else { 
       this.props.updateOrder(this.state.id, this.state)
     }
      this.setState({
        device: '',
        service: '',
        location: '',
        notes: '',
        currentOrder: {}
      })
  }

  render() {
    return (
    <div>
      <h2>Add an Order</h2>
      <form className="add-order" onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="order_device">Device</label>
            <input type="text"
              name="device"
              value={this.state.device}
              onChange={this.handleOnChange}
              placeholder="Device to Service"
            />
        </div>
        <div>
          <label htmlFor="order_service">Service</label>
          <input type="text"
            name="service"
            value={this.state.service}
            onChange={this.handleOnChange}
            placeholder="Service Type"
          />
        </div>

        <div>
          <label htmlFor="order_location">Location</label>
          <input type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleOnChange}
            placeholder="Location for Service"
          /><br />
        </div>

        <div>
          <label htmlFor="order_notes">Notes</label>
          <input type="text-area"
            name="notes"
            value={this.state.notes}
            onChange={this.handleOnChange}
            placeholder="Service Notes"
          />
        </div>

        <button>Add Service Order</button>
      </form>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    currentOrder: state.orders.currentOrder
  }
}

export default connect(mapStateToProps,{ createOrder, updateOrder })(OrderForm);
