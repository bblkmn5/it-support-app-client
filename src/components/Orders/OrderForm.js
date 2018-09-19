import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createOrder } from '../../actions/order_actions'

class OrderForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      device: '',
      service: '',
      location: '',
      notes: ''
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
    this.props.createOrder(this.state)
      .then(() => {this.setState({
        device: '',
        service: '',
        location: '',
        notes: '',
      })
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
    state: state
  }
}

export default connect(mapStateToProps,{ createOrder })(OrderForm);
