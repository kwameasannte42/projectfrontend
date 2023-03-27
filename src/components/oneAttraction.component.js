import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/one-attraction.style.css";

export default class oneAttraction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attraction: "",
      address: "",
      imageURL: "",
      description: "",
      ratings: "",
      user: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://qctbackend.onrender.com/attractions/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          attraction: response.data.attraction,
          address: response.data.address,
          image: response.data.image,
          description: response.data.description,
          ratings: response.data.ratings,
          user: response.data.user,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state.attraction);
  }
  render() {
    return (
      <div className="one-attraction row align-content-center justify-content-center">
        <div className="lefty col-6 col-md-4 col-8 text-center text-white p-3">
          <h2 className="place-name">{this.state.attraction}</h2>
          <div className="place-photo">
            <img src={this.state.image} className="img-fluid p-3" alt="." />
          </div>
        </div>
        <div className="righty col-6 col-md-4 col-8 bg-light p-2">
          <div className="m-3">
            <i className="righty-head">Address</i>
            <h5>{this.state.address}</h5>
          </div>
          <div className="m-3">
            <i className="righty-head">Description</i>
            <p>{this.state.description}</p>
          </div>
          <p>
            <i className="righty-head">Ratings: </i> {this.state.ratings}
          </p>
          <p>
            <i className="righty-head">Submitted by: </i>
            {this.state.user}
          </p>
        </div>
      </div>
    );
  }
}
