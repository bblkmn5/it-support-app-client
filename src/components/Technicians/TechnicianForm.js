import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'; 
import { createTechnician } from '../../actions/technician_actions';

const form = reduxForm({
  form: 'technician'
})

class TechnicianForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      maxOrders: '',
      notes: ''
    }
  }

  componentDidMount() {
    this.setState({
      ...this.props.order
    })
  }

  canBeSubmitted() {
    const { name, maxOrders, notes } = this.state;
    return (
      name.length > 0 && maxOrders.length > 0 && notes.length > 0
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
    this.props.createTechnician(this.state)
    this.setState({
      name: '',
      maxOrders: '',
      notes: ''
    })
    this.props.handleCloseModal()
  }

  render() {
    const isEnabled = this.canBeSubmitted();

    return (
    <div>
      <h1>Add a Technician</h1>
      <form className="add-technician" onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <Field 
            name="name"
            component="input"
            value={this.state.name}
            onChange={this.handleOnChange}
            placeholder="Name of Technician"
          />
        </div>
        <div>
          <label htmlFor="maxOrders">Maximum Orders Pending</label>
          <div>
            <Field 
                name="maxOrders"
                component="select"
                value={this.state.maxOrders}
                onChange={this.handleOnChange}>
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
                placeholder="Technician Notes"
              />
            </div>
        </div>
        <button disabled={!isEnabled}>Add Technician</button>
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

export default connect(mapStateToProps,{ createTechnician })(form(TechnicianForm));