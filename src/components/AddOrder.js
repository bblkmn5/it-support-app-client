import React, { Component } from 'react';

class AddOrder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      device: '',
      service: '',
      location: '',
      notes: '',
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const order = this.state;
    this.props.addOrder(order)
    this.setState({
      device: '',
      service: '',
      location: '',
      notes: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="order_device">Device</label>
          <input type="text"
            name="device"
            value={this.state.device}
            onChange={this.handleOnChange}
            placeholder="Device to Service"
          />

        <label htmlFor="order_service">Service</label>
          <input type="text"
            name="service"
            value={this.state.service}
            onChange={this.handleOnChange}
            placeholder="Service Type"
          />

        <label htmlFor="order_location">Location</label>
          <input type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleOnChange}
            placeholder="Location for Service"
          />

        <label htmlFor="order_notes">Notes</label>
          <input type="text-area"
            name="notes"
            value={this.state.notes}
            onChange={this.handleOnChange}
            placeholder="Service Notes"
          />

        <button>Add Service Order</button>
      </form>
    )
  }
}

export default AddOrder;