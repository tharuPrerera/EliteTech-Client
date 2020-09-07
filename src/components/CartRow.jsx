import React, { Component } from 'react'; 
import axios from 'axios';

class CartRow extends Component {
    state={
        totalValue : null
    }

    constructor(props) {
        super(props);
        this.deleteCartItem = this.deleteCartItem.bind(this);
    }

    async deleteCartItem() {
        await axios.delete('http://localhost:5000/api/cart/'+this.props.obj._id)
        .catch(err => console.log(err))
        window.location.reload();
    }


    render () {
        return (
            <tr>
                <td><img className="img-thumbnail" style={{width:"100px", height:"100px" }} src={this.props.obj.imgUrl}/></td>
                <td>{this.props.obj.itemName}</td>
                <td>{this.props.obj.quantity}</td>
                <td><input type="Number" className="from-control" value={this.props.obj.quantity} onChange={this.onchangeQuantity}/></td>
                {/* <td>
                    <button onClick={this.doDecrement} id={this.props.obj._id} className="fa fa-minus fa-inverse fa-2x"></button>
                    <input type="text" className="number" id = {this.props.obj._id + "totalValue"} value={this.props.obj.quantity } onChange={this.changeValue}></input>
                    <button onClick={this.doIncrement} id={this.props.obj._id} className="fa fa-plus fa-inverse fa-2x"></button>
                </td> */}
                <td>{this.props.obj.unitPrice}</td>
                <td>{this.props.obj.unitPrice*this.props.obj.quantity}</td>
                <td><button onClick={this.deleteCartItem} className="btn btn-danger">Delete</button></td>
            </tr>
        );
    }
}

export default CartRow;