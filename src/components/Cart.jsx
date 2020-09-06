import React, { Component } from 'react';
import axios from 'axios';

class cart extends Component {
 constructor(props){
    super(props);

    this.onchangeQuantity = this.onchangeQuantity.bind(this);

    this.state = {
        itemName: '', unitPrice: '', quantity:'',value: 0,
        message: null
    }
 }

 componentDidMount() {
    axios.get('http://localhost:5000/api/products/'+this.props.match.params.id)
      .then(response => {
          this.setState({
            itemName: response.data.itemName,
            unitPrice: response.data.unitPrice,
            quantity: response.data.quantity,
          });
      })
      .catch(function (error) {
          console.log(error);
      })
}

 onchangeQuantity(e) {
    this.setState({ quantity: e.target.value });
}
 
tabRow() {
    // return this.state.allProducts.map(function(object, i){
    //     return<cartRow obj={object} key={i}/>
    // });
  }
render() {
        return (
               <div >
                 <div>
                      <table className="table table-striped" style={{marginTop:20}}>
                          
                          <thead>
                            <tr>
                              <th>Item</th>
                              <th>Quantity</th>
                              <th>Unit Price</th>
                              <th colSpan="3">Action</th>
                            </tr>
                          </thead>
                          
                          <tbody>
                            <tr>
                              
                              <td class="w-25">
                                <div >
                                   <img class="img-fluid w-100" src="https://computing.which.co.uk/hc/article_attachments/360003986679/mac.JPG"/>
                                <div class="mask rgba-black-slight"></div>
                                </div>
                              </td>
                            
                              <td class="w-25">
                                <div>
                                 <button onClick={this.doDecrement} className="fa fa-minus fa-inverse fa-2x"></button>
                                 <input type="text" className="number" value={this.state.value }></input>
                                 <button onClick={this.doIncrement} className="fa fa-plus fa-inverse fa-2x"></button>
                                 <sub>{this.state.message}</sub>
                                </div>
                              </td>
                            
                             <td>Rs350,000.00</td>
                             
                             <td>
                               <button className="btn btn-danger">Delete</button></td>
                            </tr>

                            <tr>
                              
                              <td class="w-25">
                                <div >
                                   <img class="img-fluid w-100" src="https://computing.which.co.uk/hc/article_attachments/360003986679/mac.JPG"/>
                                <div class="mask rgba-black-slight"></div>
                                </div>
                              </td>
                            
                              <td class="w-25">
                                <div>
                                 <button onClick={this.doDecrement} className="fa fa-minus fa-inverse fa-2x"></button>
                                 <input type="text" className="number" value={this.state.value }></input>
                                 <button onClick={this.doIncrement} className="fa fa-plus fa-inverse fa-2x"></button>
                                 <sub>{this.state.message}</sub>
                                </div>
                              </td>
                            
                             <td>Rs350,000.00</td>
                             
                             <td>
                               <button className="btn btn-danger">Delete</button></td>
                            </tr>
                          
                          </tbody>
                      </table>
                      
                      <button type="button" class="btn btn-dark">Confirm & Pay</button>
                      {" "}
                      <button type="button" class="btn btn-dark">Continue Shopping <i class="fa fa-arrow-right"></i></button><br/><br/>
                    </div>
                </div>
    );
    }
    doDecrement=() =>{
        if(this.state.value) {
          this.setState({
            value: this.state.value - 1,
            message: null
          });
        } else {
          this.setState({
            message: "Can't decrement. Since 0 is the minimum value"
          });
        }
      };
      doIncrement=() =>{
        if(this.state.value < 10) {
          this.setState({
            value: this.state.value + 1,
            message: null
          });
        } else {
          this.setState({
            message: "Can't increment. Since 10 is the maximum value"
          });
        }
    }
 }

 export default cart;