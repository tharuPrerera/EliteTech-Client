import React, { Component } from 'react'; 
import axios from 'axios';

class CartRow extends Component {
    constructor(props) {
        super(props);
        //call delete
       
    }

    //delete method
    

    render () {
        return (
            <tr>
                <td><img className="img-thumbnail" style={{width:"100px", height:"100px" }} src={this.props.obj.imgUrl}/></td>
                <td>{this.props.obj.itemName}</td>
                <td><input type="Number" className="from-control" value={this.props.obj.quantity} onChange={this.onchangeQuantity}/></td>
                {/* <td>
                    <button onClick={this.doDecrement} className="fa fa-minus fa-inverse fa-2x"></button>
                    <input type="text" className="number" value={this.props.obj.quantity }></input>
                    <button onClick={this.doIncrement} className="fa fa-plus fa-inverse fa-2x"></button>
                </td> */}
                <td>{this.props.obj.unitPrice}</td>
                <td>{this.props.obj.unitPrice*this.props.obj.quantity}</td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>
        );
    }
}

export default CartRow;