import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import axios from "axios";
import {Link} from 'react-router-dom';

class Desktop extends Component {
  constructor(props) {
    super(props);

    this.state = {
     allDesktops: [],
    };
  }

  async componentDidMount() {
    let {data} = await axios.get("http://localhost:5000/api/desktop");
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

    this.setState({allDesktops: products});
  }

  render() {

    var data= this.state.allDesktops;

    return (
      <div className="container">
        <div className="allProducts" style={{marginTop: "50px"}}>
        <h5 align="left"><u>Home/Desktop</u></h5>
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
                          <Link to={"/productDesktop/"+product._id} className="btn btn-info">Buy Now</Link>

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
    //             src="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/desktops/optiplex_desktops/7770_aio/pdp/desktop-optiplex-27-7770-aio-mlk-pdp-mod1.jpg?fmt=jpg"
    //           />
    //           <Card.Body>
    //             <Card.Title>Dell OptiPlex 5270</Card.Title>
    //             <Card.Text>
    //            Dell OptiPlex 5270 All-in-One. Non-Touch: Experience the speed of a 256GB Solid State Drive (SSD) and Windows 10 Pro in a space-saving all-in-one design.
    //             </Card.Text>
    //             <Button variant="primary">Add to Cart</Button>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img
    //             variant="top"
    //             src="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/desktops/optiplex_desktops/7770_aio/pdp/desktop-optiplex-27-7770-aio-mlk-pdp-mod1.jpg?fmt=jpg"
    //           />
    //           <Card.Body>
    //           <Card.Title>Dell OptiPlex 5270</Card.Title>
    //             <Card.Text>
    //            Dell OptiPlex 5270 All-in-One. Non-Touch: Experience the speed of a 256GB Solid State Drive (SSD) and Windows 10 Pro in a space-saving all-in-one design.
    //             </Card.Text>
    //             <Button variant="primary">Add to Cart</Button>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img
    //             variant="top"
    //             src="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/desktops/optiplex_desktops/7770_aio/pdp/desktop-optiplex-27-7770-aio-mlk-pdp-mod1.jpg?fmt=jpg"
    //           />
    //           <Card.Body>
    //           <Card.Title>Dell OptiPlex 5270</Card.Title>
    //             <Card.Text>
    //            Dell OptiPlex 5270 All-in-One. Non-Touch: Experience the speed of a 256GB Solid State Drive (SSD) and Windows 10 Pro in a space-saving all-in-one design.
    //             </Card.Text>
    //             <Button variant="primary">Add to Cart</Button>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img
    //             variant="top"
    //             src="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/desktops/optiplex_desktops/7770_aio/pdp/desktop-optiplex-27-7770-aio-mlk-pdp-mod1.jpg?fmt=jpg"
    //           />
    //           <Card.Body>
    //           <Card.Title>Dell OptiPlex 5270</Card.Title>
    //             <Card.Text>
    //            Dell OptiPlex 5270 All-in-One. Non-Touch: Experience the speed of a 256GB Solid State Drive (SSD) and Windows 10 Pro in a space-saving all-in-one design.
    //             </Card.Text>
    //             <Button variant="primary">Add to Cart</Button>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img
    //             variant="top"
    //             src="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/desktops/optiplex_desktops/7770_aio/pdp/desktop-optiplex-27-7770-aio-mlk-pdp-mod1.jpg?fmt=jpg"
    //           />
    //           <Card.Body>
    //           <Card.Title>Dell OptiPlex 5270</Card.Title>
    //             <Card.Text>
    //            Dell OptiPlex 5270 All-in-One. Non-Touch: Experience the speed of a 256GB Solid State Drive (SSD) and Windows 10 Pro in a space-saving all-in-one design.
    //             </Card.Text>
    //             <Button variant="primary">Add to Cart</Button>
    //           </Card.Body>
    //         </Card>
    //       </div>

    //       <div className="col-lg-4 mb-4 grid-margin">
    //         <Card style={{ width: "15rem" }}>
    //           <Card.Img
    //             variant="top"
    //             src="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/desktops/optiplex_desktops/7770_aio/pdp/desktop-optiplex-27-7770-aio-mlk-pdp-mod1.jpg?fmt=jpg"
    //           />
    //           <Card.Body>
    //           <Card.Title>Dell OptiPlex 5270</Card.Title>
    //             <Card.Text>
    //            Dell OptiPlex 5270 All-in-One. Non-Touch: Experience the speed of a 256GB Solid State Drive (SSD) and Windows 10 Pro in a space-saving all-in-one design.
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

export default Desktop;
