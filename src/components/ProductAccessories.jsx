import React, { Component } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

class ProductAccessories extends Component {
  constructor(props) {
    super(props);

    this.onchangeQuantity = this.onchangeQuantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      imgUrl: "",
      itemName: "",
      unitPrice: "",
      brand: "",
      code: "",
      warranty: "",
      quantity: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:5000/api/accessories/" + this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          imgUrl: response.data.imgUrl,
          itemName: response.data.itemName,
          unitPrice: response.data.unitPrice,
          brand: response.data.brand,
          code: response.data.code,
          warranty: response.data.warranty,
          quantity: response.data.quantity,
          stock: response.data.stock,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onchangeQuantity(e) {
    this.setState({ quantity: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      imgUrl: this.state.imgUrl,
      itemName: this.state.itemName,
      unitPrice: this.state.unitPrice,
      brand: this.state.brand,
      code: this.state.code,
      warranty: this.state.warranty,
      quantity: this.state.quantity,
    };

    axios
      .post("http://localhost:5000/api/cart/", obj)
      .then((res) => console.log(res.data));

    this.setState({
      imgUrl: "",
      itemName: "",
      unitPrice: "",
      brand: "",
      code: "",
      warranty: "",
      quantity: "",
    });

    this.props.history.push("/cart/" + this.props.match.params.id);
  }

  render() {
    return (
      <div className="container">
        <div className="col">
          <div style={{ marginTop: 20 }} align="center">
            <Form style={{ marginTop: 35 }} onSubmit={this.onSubmit}>
              <Form.Group controlId="BasicUpdateForm" align="left">
                <h5>{this.state.itemName}</h5>&nbsp;
                <img className="img-thumbnail" src={this.state.imgUrl} />
                <h5>Rs: {this.state.unitPrice}</h5>&nbsp;&nbsp;
                <h5>Brand: {this.state.brand}</h5>&nbsp;&nbsp;
                <h5>Code: {this.state.code}</h5>&nbsp;&nbsp;
                <h5>In Stock: {this.state.stock} </h5>&nbsp;&nbsp;
                <h5>Warranty: {this.state.warranty}</h5>&nbsp;&nbsp;
                <label>Quantity: </label>
                <input
                  type="Number"
                  className="from-control"
                  value={this.state.quantity}
                  onChange={this.onchangeQuantity}
                />{" "}
                &nbsp;&nbsp;
                <input
                  type="submit"
                  value="Add to Cart"
                  className="btn btn-primary"
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductAccessories;
