import React, { Component } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form } from 'react-bootstrap';

class Product extends Component {
  constructor(props) {
    super(props);

    this.onchangeQuantity = this.onchangeQuantity.bind(this);
   

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
      .get("http://localhost:5000/api/products/" + this.props.match.params.id)
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

//2


  render() {
    return (
      <div className="container">
            <div className="col">
              <div style={{ marginTop:20}} align="center">
                  <Form style={{ marginTop:35}} >
                      <Form.Group controlId="BasicUpdateForm" align ="left">
                          <h5>{this.state.itemName}</h5>&nbsp;
                          <img className="img-thumbnail" src={this.state.imgUrl}/>
                          <h5>Rs: {this.state.unitPrice}</h5>&nbsp;&nbsp;
                          <h5>Brand: {this.state.brand}</h5>&nbsp;&nbsp;
                          <h5>Code: {this.state.code}</h5>&nbsp;&nbsp;
                          <h5>In Stock: {this.state.stock} </h5>&nbsp;&nbsp;
                          <h5>Warranty: {this.state.warranty}</h5>&nbsp;&nbsp;
                          <label>Quantity: </label>
                             <input type="Number" className="from-control" value={this.state.quantity} onChange={this.onchangeQuantity}/> &nbsp;&nbsp;
                          <input type ="submit" value="Add to Cart" className = "btn btn-primary"/>
                      </Form.Group>
                  </Form>
              </div>
            </div>
      </div>
    );

    // return (
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-12 col-sm-12"></div>
    //       <div className="col-md-6 col-sm-12">
    //         <div style={{ marginTop: 90 }} align="center">
    //           <Card style={{ width: "18rem" }}>
    //             <Card.Img variant="top" src={this.state.imgUrl} />
    //           </Card>
    //         </div>
    //       </div>
    //       <div className="col-md-6 col-sm-12">
    //         <div style={{ marginTop: 50 }} align="left">
    //           <div className="form-group">
    //             <h2>{this.state.itemName}</h2>&nbsp;
    //             <h2>Rs: {this.state.unitPrice}</h2>&nbsp;&nbsp;
    //             <h5>Brand: {this.state.brand}</h5>
    //             <h5>Code: {this.state.code}</h5>
    //             <h5>In Stock: </h5>
    //             <h5>Warranty: {this.state.warranty}</h5>
    //           </div>
    //           <div className="form-group">
    //             <label>Quantity: </label>
    //             <input
    //               type="Number"
    //               className="from-control"
    //               value={this.state.quantity}
    //               onChange={this.onchangeQuantity}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <Link to={"/ViewCart/"+this.props.match.params.id} className="btn btn-danger" size="sm">
    //               Add to cart
    //             </Link>
    //             &nbsp; &nbsp;
    //             <Link to={""} className="btn btn-danger" size="sm">
    //               Buy Now
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}
export default Product;
