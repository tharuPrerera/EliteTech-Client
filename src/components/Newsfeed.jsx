import React, { Component } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";

class Newsfeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    fetch(
      "http://newsapi.org/v2/everything?q=gaming laptop&from=2020-08-10&sortBy=publishedAt&apiKey=8a6f2831602d4bfa9290f70e08ce1b4f"
    )
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          articles: myJson.articles,
        });
      });
  }

  render() {
    console.log(this.state);
    return (
        
      <div>
          <h5 align="middle"><u>Home/NewsFeeds</u></h5><br/>
          <hr></hr>
        {this.state.articles.map((item, index) => {
            
            
          return(

            <div>
                <h5 style={{textAlign:'middle',fontSize:'15px'}}>              
                    {item.title}            
                </h5>

                <br/>

                <b style={{fontSize:'10px'}}>Author:{item.author}</b>

                <br/>

                <img src={item.urlToImage} style={{width:'20vw'}}/>

                <br/>

                <a href={item.url} style={{fontSize:'12px'}}>Read More</a>

                <p style={{fontSize:'14px',textAlign:'center'}}>
                    {item.content}
                </p>
                <hr></hr>
           </div>
          );
        })}
      </div>
    );
  }
}

export default Newsfeed;
