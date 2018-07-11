import React, { Component } from "react";
import axios from "axios";
import Header from "./Header.js";
import RestDescription from "./RestDescription.js";
import Catego from "./Categories.js";

class Menus extends Component {
  state = {
    restaurant: {},
    menus: {},
    isLoading: true
  };

  render() {
    if (!this.state.isLoading) {
      return (
        <div>
          <Header />
          <div>
            <RestDescription restaurant={this.state.restaurant} />
            <Catego
              restaurant={this.state.restaurant}
              menu={this.state.menus}
            />
          </div>
        </div>
      );
    } else {
      return <div>isLoading</div>;
    }
  }

  componentDidMount() {
    axios
      .get(
        "https://s3-eu-west-1.amazonaws.com/lereacteurapp/react/deliveroo/deliveroo-cart.json"
      )
      .then(response =>
        this.setState({
          restaurant: response.data.restaurant,
          menus: response.data.menu,
          isLoading: false
        })
      );
  }
}

export default Menus;
