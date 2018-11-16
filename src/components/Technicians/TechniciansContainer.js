import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import Modal from 'react-modal';
import { fetchTechnicians, deleteTechnician } from '../../actions/technician_actions';
import Technician from './Technician';
import TechnicianForm from './TechnicianForm'
import { bindActionCreators } from 'redux';

class TechniciansContainer extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <h1>Current Technicians</h1>
        )
    }
}

export default TechniciansContainer;