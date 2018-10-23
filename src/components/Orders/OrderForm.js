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
      notes: props.notes || '',
      locationValues: false
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

  

  render() {
    const { locationValues } = this.props;
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
            placeholder="Device to Service"
          />
        </div>
        <div>
          <label htmlFor="service">Service</label>
          <div>
            <Field 
                name="service"
                component="select"
                value={this.state.service}
                onChange={this.handleOnChange}
                placeholder="Service Type">
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
                type="radio"
                value={this.state.location}
                onChange={this.handleOnChange}
                placeholder="Location for Service"
                >
                <option />
                <option>On-Site</option>
                <option>Wireless</option>
              </Field>
            </div>
            {locationValues && (
              <div>
                <Field
                  name="onSiteLocations"
                  component="select" >
                  <option>Office</option>
                  <option>Home</option>
                  <option>Online</option>
                </Field>
              </div>
            )}
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <div>
            <Field 
                name="notes"
                component="textarea"
                value={this.state.notes}
                onChange={this.handleOnChange}
                placeholder="Service Notes"
              />
            </div>
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
