import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'; 
import { createOrder } from '../../actions/order_actions';

const form = reduxForm({
  form: 'order'
})

class OrderForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      device: props.device || '',
      service: props.service || '',
      location: props.location || '',
      notes: props.notes || ''
    }
  }

  componentDidMount() {
    this.setState({
      ...this.props.order
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
    this.props.createOrder(this.state)
    this.setState({
      device: '',
      service: '',
      location: '',
      notes: ''
    }) 
  }

  render() {
    return (
    <div>
      <h2>Add an Order</h2>
      <form className="add-order" onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="device">Device</label>
          <Field 
            name="device"
            component="input"
            value={this.state.device}
            onChange={this.handleOnChange}
            type="text"
            placeholder="Device to Service"
          />
        </div>
        <div>
          <label htmlFor="service">Service</label>
          <Field 
              name="service"
              component="input"
              value={this.state.service}
              onChange={this.handleOnChange}
              type="text"
              placeholder="Service Type"
            />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <Field 
              name="location"
              component="input"
              value={this.state.location}
              onChange={this.handleOnChange}
              type="text"
              placeholder="Location for Service"
            />
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <Field 
              name="notes"
              component="input"
              value={this.state.notes}
              onChange={this.handleOnChange}
              type="textarea"
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

export default connect(mapStateToProps,{ createOrder })(form(OrderForm));
