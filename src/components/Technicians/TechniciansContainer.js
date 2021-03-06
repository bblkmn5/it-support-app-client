import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchTechnicians } from '../../actions/technician_actions';
import Technician from './Technician';
import { bindActionCreators } from 'redux';

class TechniciansContainer extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            showTechnicians: false
        }
    }

    componentDidMount() {
        this.props.fetchTechnicians()
      }

    render(){
        let renderedTechnicians = this.props.technicians.map(technician => <Technician key={technician.id} technician={technician} />)
        const emptyMessage = ( <tr><td>There are no Technicians available!</td></tr>)
        return(
            <div>
                <h1>Technicians Available</h1>
                <Table responsive striped bordered condensed hover>
                    <thead>
                        <tr>
                        <th>Technician Name</th>
                        <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                    {renderedTechnicians.length === 0 ? emptyMessage: renderedTechnicians}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      technicians: state.technicians.technicians
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      fetchTechnicians: fetchTechnicians
    }, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TechniciansContainer);