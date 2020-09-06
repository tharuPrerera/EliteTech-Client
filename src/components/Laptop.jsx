import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import axios from "axios";
import {Link} from 'react-router-dom';

class Laptop extends Component {
  constructor(props) {
    super(props);

    this.state = {
     allLaptops: [],
    };
  }

  async componentDidMount() {
    let {data} = await axios.get("http://localhost:5000/api/laptop");
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

    this.setState({allLaptops: products});
}

  render() {
    var data= this.state.allLaptops;

    return (
      <div className="container">
        <div className="allProducts" style={{marginTop: "50px"}}>
        <h5 align="left"><u>Home/Laptop</u></h5>
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
                          {/* <Button className="btn btn-info">Buy Now</Button>&nbsp;&nbsp; */}
                          <Link className="btn btn-info">Buy Now</Link>
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
    //   <div className="container">
    //     <div className="row mt-5">
    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img
    //             variant="top"
    //             src="https://cdn.takas.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/0/c05260505.png"
    //           />
    //           <Card.Body>
    //             <Card.Title>HP ProBook i7 10th Gen</Card.Title>
    //             <Card.Text>
    //               HP Probook 440 G7 14-inch Laptop (10th Gen Core
    //               i7-10510U/8GB/1TB HDD + 256GB SSD/Windows 10 Pro/Intel UHD 620
    //               Graphics.
    //             </Card.Text>
    //             <Button variant="primary">Add to Cart</Button>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img
    //             variant="top"
    //             src="https://cdn.takas.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/0/c05260505.png"
    //           />
    //           <Card.Body>
    //             <Card.Title>HP ProBook i7 10th Gen</Card.Title>
    //             <Card.Text>
    //               HP Probook 440 G7 14-inch Laptop (10th Gen Core
    //               i7-10510U/8GB/1TB HDD + 256GB SSD/Windows 10 Pro/Intel UHD 620
    //               Graphics.
    //             </Card.Text>
    //             <Button variant="primary">Add to Cart</Button>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img
    //             variant="top"
    //             src="https://cdn.takas.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/0/c05260505.png"
    //           />
    //           <Card.Body>
    //             <Card.Title>HP ProBook i7 10th Gen</Card.Title>
    //             <Card.Text>
    //               HP Probook 440 G7 14-inch Laptop (10th Gen Core
    //               i7-10510U/8GB/1TB HDD + 256GB SSD/Windows 10 Pro/Intel UHD 620
    //               Graphics.
    //             </Card.Text>
    //             <Button variant="primary">Add to Cart</Button>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img
    //             variant="top"
    //             src="https://cdn.takas.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/0/c05260505.png"
    //           />
    //           <Card.Body>
    //             <Card.Title>HP ProBook i7 10th Gen</Card.Title>
    //             <Card.Text>
    //               HP Probook 440 G7 14-inch Laptop (10th Gen Core
    //               i7-10510U/8GB/1TB HDD + 256GB SSD/Windows 10 Pro/Intel UHD 620
    //               Graphics.
    //             </Card.Text>
    //             <Button variant="primary">Add to Cart</Button>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img
    //             variant="top"
    //             src="https://cdn.takas.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/0/c05260505.png"
    //           />
    //           <Card.Body>
    //             <Card.Title>HP ProBook i7 10th Gen</Card.Title>
    //             <Card.Text>
    //               HP Probook 440 G7 14-inch Laptop (10th Gen Core
    //               i7-10510U/8GB/1TB HDD + 256GB SSD/Windows 10 Pro/Intel UHD 620
    //               Graphics.
    //             </Card.Text>
    //             <Button variant="primary">Add to Cart</Button>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img
    //             variant="top"
    //             src="https://cdn.takas.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/0/c05260505.png"
    //           />
    //           <Card.Body>
    //             <Card.Title>HP ProBook i7 10th Gen</Card.Title>
    //             <Card.Text>
    //               HP Probook 440 G7 14-inch Laptop (10th Gen Core
    //               i7-10510U/8GB/1TB HDD + 256GB SSD/Windows 10 Pro/Intel UHD 620
    //               Graphics.
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

export default Laptop;
