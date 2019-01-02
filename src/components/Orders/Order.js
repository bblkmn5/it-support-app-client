import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { updateOrder } from '../../actions/order_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Order extends Component {
    constructor(props) {
        super(props)

        this.state = {
            likeCount: this.props.order.likeCount
        }

        // this.handleLike = this.handleLike.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState(props);
      }

    handleDelete = () => {
        window.confirm("Are you sure you have completed this order? It will be deleted") &&
        this.props.onDelete(this.props.order.id)
    }

    handleOnChange = () => {
        this.setState({
          likeCount: this.props.order.likeCount += 1
        })
        this.props.updateOrder(this.props.order.id, this.state)
        console.log(this.props.order.likeCount)
    }
    
    // handleLike = (event) => {
    //     event.preventDefault()
    //     console.log(this.state)
    //     this.setState({
    //         likeCount: this.props.order.likeCount += 1
    //     })
    //     this.props.updateOrder(this.props.order.id, this.props.order)
    // }

    render(){
        const { props } = this;

        return (
            <tr>
                <td>{props.order.id}</td>
                <td>{props.order.device}</td>
                <td>{props.order.deviceType}</td>
                <td>{props.order.location}</td>
                <td>{props.order.service}</td>
                <td>{props.order.technician}</td>
                <td>{props.order.notes}</td>
                <td><Button bsSize="small" onClick={this.handleDelete}>Complete</Button></td>
                <td><Button bsSize="small" onClick={this.handleOnChange}>Like</Button>Count: {this.props.order.likeCount}</td>
            </tr>    
        )
    }
}

const mapStateToProps = state => {
    return {
      orders: state.orders.orders
    };
  }

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        updateOrder: updateOrder
    }, dispatch)
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Order);
