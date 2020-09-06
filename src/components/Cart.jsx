import React, { Component } from 'react';
import axios from 'axios';
import CartRow from './CartRow';
import {Link} from 'react-router-dom';

class cart extends Component {
 constructor(props){
    super(props);

    this.onchangeQuantity = this.onchangeQuantity.bind(this);

    this.state = {
      CartItems: [],
      quantity:''

        // itemName: '', unitPrice: '', quantity:'',value: 0,
        // message: null
    }
 }

 async componentDidMount() {
  let {data} = await axios.get("http://localhost:5000/api/cart");
  console.log(data);

    let items = data.map((cart) => {
        return {
            _id: cart._id,
            imgUrl:cart.imgUrl,
            itemName: cart.itemName,
            unitPrice: cart.unitPrice,
            brand: cart.brand,
            code: cart.code,
            warranty: cart.warranty,
            quantity: cart.quantity,
        };
    });

    this.setState({CartItems: items});
  }

  //  componentDidMount() {
  //     axios.get('http://localhost:5000/api/products/'+this.props.match.params.id)
  //       .then(response => {
  //           this.setState({
  //             itemName: response.data.itemName,
  //             unitPrice: response.data.unitPrice,
  //             quantity: response.data.quantity,
  //           });
  //       })
  //       .catch(function (error) {
  //           console.log(error);
  //       })
  // }

  onchangeQuantity(e) {
      this.setState({ quantity: e.target.value });
  }
 
  // tabRow() {
  //     // return this.state.allProducts.map(function(object, i){
  //     //     return<cartRow obj={object} key={i}/>
  //     // });
  //   }
  row() {
    return this.state.CartItems.map(function(object, i){
        return<CartRow obj={object} key={i}/>
    });
  }

    render() {
      return (
        <div>
        <div style={{ marginTop: 40 }}>
          <h3 align="center">Shopping cart</h3>&nbsp;&nbsp;&nbsp;&nbsp;
          <table className="table table-striped" style={{marginTop:20}}>
            <thead>
              <tr>
                <th>Product Image</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Sub Total</th>
                  <th colSpan="4">Action</th>
                </tr>
            </thead>
            <tbody>
             {this.row()}
            </tbody>
          </table> &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={""} className="btn btn-primary" align="right">Confirm and Pay</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={"/"} className="btn btn-primary">  Continue Shopping <i class="fa fa-arrow-right"></i></Link>
          {/* <button type="button" class="btn btn-dark">
            <i class="fa fa-arrow-right"></i> Continue Shopping
          </button> */}
        

        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      </div>
    );


  //       return (
  //           <div>
  //           <div >
  //               <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  //                   <a className="navbar-brand text-white text-camelcase" href="#">
  //                       <h1> EliteTech</h1>
  //                   </a>
  //               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1" aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
  //                   <span class="navbar-toggler-icon"></span>
  //               </button>
  //                   {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //                       <span class="navbar-toggler-icon"></span>
  //                   </button>*/}

  //           <div class="collapse navbar-collapse" id="navbarSupportedContent">
  //                   <form class="form-inline my-2 my-lg-0">
  //                       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
  //               <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  //                   </form>
  //                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  //               <nav class="navbar navbar-expand-md navbar-light">
  //                    <div class="collapse navbar-collapse" id="basicExampleNav1">
  //               <ul class="navbar-nav ml-auto">
  //                   <li class="nav-item">
  //                       <a a className="navbar-brand text-white text-camelcase" href="#">
  //                           <span class="badge badge-pill red">1</span>
  //                           <i class="fas fa-shopping-cart pl-0"></i>
  //                       </a>
  //                   </li>
  //                   <li class="nav-item">
  //                       <a className="navbar-brand text-white text-camelcase" href="#">Login</a>
  //                   </li>
  //               </ul>
  //           </div>
  //   </nav>
  //    </div>
  //               </nav> 
  //               </div>
  //                <div>
  //                     <table className="table table-striped" style={{marginTop:20}}>
  //                         <thead>
  //                             <tr>
  //                               <th>Item</th>
  //                               <th>Quantity</th>
  //                               <th>Unit Price</th>
  //                               <th colSpan="3">Action</th>
  //                            </tr>
  //                         </thead>
  //                         <tbody>
	// 	    <tr>
		     
	// 	      <td class="w-25">
           
  //     <div >
  //       <img class="img-fluid w-100"
  //         src="https://computing.which.co.uk/hc/article_attachments/360003986679/mac.JPG"/>
  //       <div class="mask rgba-black-slight"></div>
  //     </div>
    

 
	// 	      </td>
  //             <td class="w-25">
  //               {/*<div class="card-body text-center">

  //       <p><h5>Acer Nitro 5 Core i7 8750H Gaming Laptop - Windows 10</h5></p>
  //       <ul class="rating">
        
  //           <i class="fas fa-star fa-sm text-primary"></i>
  //           <i class="fas fa-star fa-sm text-primary"></i>
  //           <i class="fas fa-star fa-sm text-primary"></i>
  //           <i class="fas fa-star fa-sm text-primary"></i>
  //           <i class="far fa-star fa-sm text-primary"></i>

  //       </ul>

  //       <h6 class="mb-3">
  //       <span class="text-danger mr-1">Rs240,000.00</span>
  //               </h6>*/}
  //               <div>
  //               <button onClick={this.doDecrement} className="fa fa-minus fa-inverse fa-2x"></button>
  //               <input type="text" className="number" value={this.state.value }></input>
  //               <button onClick={this.doIncrement} className="fa fa-plus fa-inverse fa-2x"></button>
  //               <sub>{this.state.message}</sub>
  //               </div>
            

  //   {/*<button type="button" class="btn btn-primary btn-sm mr-1 mb-2">
  //   <i class="fas fa-shopping-cart pr-2"></i>Add to cart
  //   </button>
  //   <button type="button" class="btn btn-light btn-sm mr-1 mb-2">
  //   <i class="fas fa-info-circle pr-2"></i>Details
  //   </button>
  //   <button type="button" class="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to wishlist">
  //   <i class="far fa-heart"></i>
  //   </button>
            
  //           </td>
  //   </div>
  //   */}
  //   </td>
  //   <td>Rs350,000.00</td>
	// <td><button class="btn"><i class="fa fa-trash"></i></button> </td>
  //   </tr>
  //   <tr>
  //   <td class="w-25">
           
  //          <div class="mask">
  //            <img class="img-fluid w-100"
  //              src="https://cdn.takas.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/3/7/37_2_9_1.jpg"/>
  //            <div class="mask rgba-black-slight"></div>
  //          </div>
         
     
      
  //                  </td>
  //                  <td>
  //                    {/*<div class="card-body text-center">
     
  //            <p><h5>Acer Nitro 5 Core i7 8750H Gaming Laptop - Windows 10</h5></p>
  //            <ul class="rating">
             
  //                <i class="fas fa-star fa-sm text-primary"></i>
  //                <i class="fas fa-star fa-sm text-primary"></i>
  //                <i class="fas fa-star fa-sm text-primary"></i>
  //                <i class="fas fa-star fa-sm text-primary"></i>
  //                <i class="far fa-star fa-sm text-primary"></i>
     
  //            </ul>
     
  //            <h6 class="mb-3">
  //            <span class="text-danger mr-1">Rs240,000.00</span>
  //                    </h6>*/}
  //                    <div>
  //                    <button onClick={this.doDecrement} className="fa fa-minus fa-inverse fa-2x"></button>
  //                    <input type="text" className="number" value={this.state.value }></input>
  //                    <button onClick={this.doIncrement} className="fa fa-plus fa-inverse fa-2x"></button>
  //                    <br/>
  //                    <sub>{this.state.message}</sub>
  //                    </div>
                 
     
  //        {/*<button type="button" class="btn btn-primary btn-sm mr-1 mb-2">
  //        <i class="fas fa-shopping-cart pr-2"></i>Add to cart
  //        </button>
  //        <button type="button" class="btn btn-light btn-sm mr-1 mb-2">
  //        <i class="fas fa-info-circle pr-2"></i>Details
  //        </button>
  //        <button type="button" class="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to wishlist">
  //        <i class="far fa-heart"></i>
  //        </button>
                 
  //                </td>
  //        </div>
  //        */}
  //        </td>
  //        <td>Rs240,000.00</td>
  //        <td><button class="btn"><i class="fa fa-trash"></i></button></td>
  //        </tr>
  //   </tbody>
  //                     </table>
  //                     <button type="button" class="btn btn-dark">
  //                         Confirm & Pay
  //        </button>
  //        <br/>
  //        <br/>

  //                     <button type="button" class="btn btn-dark">
  //        <i class="fa fa-arrow-left"></i> Continue Shopping
  //        </button>
  //        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  //        <button type="button" class="btn btn-dark">
  //        Next <i class="fa fa-angle-right"></i>
  //        </button>
  //                     </div>
  //           </div>
  //       );
                
  //   }
  //   doDecrement=() =>{
  //       if(this.state.value) {
  //         this.setState({
  //           value: this.state.value - 1,
  //           message: null
  //         });
  //       } else {
  //         this.setState({
  //           message: "Can't decrement. Since 0 is the minimum value"
  //         });
  //       }
  //     };
  //     doIncrement=() =>{
  //       if(this.state.value < 10) {
  //         this.setState({
  //           value: this.state.value + 1,
  //           message: null
  //         });
  //       } else {
  //         this.setState({
  //           message: "Can't increment. Since 10 is the maximum value"
  //         });
  //     }
    }
}
export default cart;