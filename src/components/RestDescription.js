import React, { Component } from "react";

class RestDescription extends Component {
  render() {
    return (
      <div className="restDescription screenSize">
        <div>
          <h1>{this.props.restaurant.name}</h1>
          <p>{this.props.restaurant.description}</p>
        </div>
        <img
          src={this.props.restaurant.picture}
          alt="restaurant"
          className="restaurantImage"
        />
      </div>
    );
  }
}

export default RestDescription;
