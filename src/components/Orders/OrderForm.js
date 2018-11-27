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
      device: '',
      deviceType: '',
      service: '',
      location: '',
      technician: '',
      notes: ''
    }
  }

  componentDidMount() {
    this.setState({
      ...this.props.order
    })
  }

  canBeSubmitted() {
    const { device, deviceType, service, location, notes } = this.state;
    return (
      device.length > 0 && deviceType.length > 0 && service.length > 0 && location.length > 0 && notes.length > 0
    );
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
      deviceType: '',
      service: '',
      location: '',
      technician: '',
      notes: ''
    }) 
    this.props.handleCloseModal()
  }

  render() {
    const isEnabled = this.canBeSubmitted();

    return (
    <div>
      <h1>Add an Order</h1>
      <form className="add-order" onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="device">Device</label>
          <Field 
            name="device"
            component="input"
            value={this.state.device}
            onChange={this.handleOnChange}
            placeholder="Device to Service"
          />
        </div>
        <div>
          <label htmlFor="deviceType">Device Type</label>
          <Field
            name="deviceType"
            component="select"
            value={this.state.deviceType}
            onChange={this.handleOnChange}>
            <option />
            <option>Laptop</option>
            <option>Desktop</option>
            <option>Mobile Phone</option>
            <option>Television</option>
            <option>Sound System</option>
            <option>Internet Router</option>
            <option>Printer</option>
            <option>Other</option>
          </Field>
        </div>
        <div>
          <label htmlFor="service">Service</label>
          <div>
            <Field 
                name="service"
                component="select"
                value={this.state.service}
                onChange={this.handleOnChange}>
                <option />
                <option>Training</option>
                <option>Installation</option>
                <option>Maintenance</option>
                <option>Inquiry</option>
                <option>Other</option>
            </Field>
            </div> 
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <div>
            <Field 
              name="location"
              component="select"
              value={this.state.location}
              onChange={this.handleOnChange}>
              <option />
              <option>Onsite (office)</option>
              <option>Onsite (home)</option>
              <option>Offsite (video conference)</option>
              <option>Offsite (phone call)</option>
              <option>Other</option>
            </Field>
          </div>
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <div>
            <Field 
                name="notes"
                component="textarea"
                rows={3}
                value={this.state.notes}
                onChange={this.handleOnChange}
                placeholder="Service Notes"
              />
            </div>
        </div>
        <button disabled={!isEnabled}>Add Service Order</button>
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