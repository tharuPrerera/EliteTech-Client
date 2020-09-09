import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel' 
import axios from "axios";
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
     allProducts: [],
    };
  }

  async componentDidMount() {
    let {data} = await axios.get("http://localhost:5000/api/products");
    console.log(data);

    let products = data.map((product) => {
        return {
            _id: product._id,
            imgUrl:product.imgUrl,
            itemName: product.itemName,
            unitPrice: product.unitPrice,
            brand: product.brand,
            code: product.code,
            warranty: product.warranty,
            quantity: product.quantity,
        };
    });

    this.setState({allProducts: products});
}

  render() {
    var data= this.state.allProducts;

    return (
      <div className="container">
      <Carousel>  
          <Carousel.Item style={{'height':"500px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'image_1.jpeg'}  />  
          </Carousel.Item  >
          <Carousel.Item style={{'height':"500px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'image_2.jpeg'}  />  
          </Carousel.Item  >
          <Carousel.Item style={{'height':"500px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'image_3.jpeg'}  />  
          </Carousel.Item  >
          <Carousel.Item style={{'height':"500px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'image_4.jpeg'}  />  
          </Carousel.Item  >
      </Carousel> 
      
        <div className="allProducts" style={{marginTop: "50px"}}>
        <h2 align="left"><u>Check out our latest deals</u></h2>
          <div className="row mt-5">
             {data.length > 0 ? data.map((product, i) => {
                 return(
                   <div className="col-lg-4 mb-4 grid-margin" key={product._id.toString()}>
                     <Card style={{ width: "15rem" }}>
                       <Card.Img variant="top" src={product.imgUrl}/>
                       <Card.Body>
                          <Card.Title align="center">{product.itemName}</Card.Title>
                          <Card.Title align="center">Rs: {product.unitPrice}</Card.Title>
                          <Card.Text align="center">
                          HP Probook 440 G7 14-inch Laptop (10th Gen Core i7-10510U/8GB/1TB HDD + 256GB SSD/Windows 10 Pro/Intel UHD 620 Graphics.
                          </Card.Text>
                          {/* <Button className="btn btn-danger">Buy Now</Button>&nbsp;&nbsp; */}
                          {/* <Link to={"/Product/"+this.props.match.params.id} className="btn btn-danger">Buy Now</Link> */}
                          <Link to={"/product/"+product._id} className="btn btn-info">Buy Now</Link>

                       </Card.Body>
                     </Card>
                   </div>
                )}                       
                ) : null} 
          </div> 
        </div> 
      </div>       
      );


    // return (
    //   // <div>
    //   //   <h1>Home!</h1>
    //   // </div>

    //   <div className="container">
    //     <div className="row mt-5">
    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/71eHle2z84L._AC_SL1500_.jpg" />
    //           <Card.Body>
    //             <Card.Title>HP ProBook i7 10th Gen</Card.Title>
    //             <Card.Text>
    //             HP Probook 440 G7 14-inch Laptop (10th Gen Core i7-10510U/8GB/1TB HDD + 256GB SSD/Windows 10 Pro/Intel UHD 620 Graphics.
    //             </Card.Text>
    //             <Button variant="primary">Add to Cart</Button>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/71eHle2z84L._AC_SL1500_.jpg" />
    //           <Card.Body>
    //             <Card.Title>HP ProBook i7 10th Gen</Card.Title>
    //             <Card.Text>
    //             HP Probook 440 G7 14-inch Laptop (10th Gen Core i7-10510U/8GB/1TB HDD + 256GB SSD/Windows 10 Pro/Intel UHD 620 Graphics.
    //             </Card.Text>
    //             <Button variant="primary">Add to Cart</Button>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/71eHle2z84L._AC_SL1500_.jpg" />
    //           <Card.Body>
    //             <Card.Title>HP ProBook i7 10th Gen</Card.Title>
    //             <Card.Text>
    //             HP Probook 440 G7 14-inch Laptop (10th Gen Core i7-10510U/8GB/1TB HDD + 256GB SSD/Windows 10 Pro/Intel UHD 620 Graphics.
    //             </Card.Text>
    //             <Button variant="primary">Add to Cart</Button>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/71eHle2z84L._AC_SL1500_.jpg" />
    //           <Card.Body>
    //             <Card.Title>HP ProBook i7 10th Gen</Card.Title>
    //             <Card.Text>
    //             HP Probook 440 G7 14-inch Laptop (10th Gen Core i7-10510U/8GB/1TB HDD + 256GB SSD/Windows 10 Pro/Intel UHD 620 Graphics.
    //             </Card.Text>
    //             <Button variant="primary">Add to Cart</Button>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/71eHle2z84L._AC_SL1500_.jpg" />
    //           <Card.Body>
    //             <Card.Title>HP ProBook i7 10th Gen</Card.Title>
    //             <Card.Text>
    //             HP Probook 440 G7 14-inch Laptop (10th Gen Core i7-10510U/8GB/1TB HDD + 256GB SSD/Windows 10 Pro/Intel UHD 620 Graphics.
    //             </Card.Text>
    //             <Button variant="primary">Add to Cart</Button>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/71eHle2z84L._AC_SL1500_.jpg" />
    //           <Card.Body>
    //             <Card.Title>HP ProBook i7 10th Gen</Card.Title>
    //             <Card.Text>
    //             HP Probook 440 G7 14-inch Laptop (10th Gen Core i7-10510U/8GB/1TB HDD + 256GB SSD/Windows 10 Pro/Intel UHD 620 Graphics.
    //             </Card.Text>
    //             <Button variant="primary">Add to Cart</Button>
    //           </Card.Body>
    //         </Card>
    //       </div>
    //     </div>
    //   </div>
    // );
    
  }
}

export default Home;
