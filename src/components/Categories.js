import React, { Component } from "react";
import FoodByCatego from "./FoodByCatego.js";

class Catego extends Component {
  render() {
    let categoriesList = [];
    let categories = Object.keys(this.props.menu);
    for (let i = 0; i < categories.length; i++) {
      let category = categories[i];
      if (this.props.menu[category].length > 0) {
        categoriesList.push(
          <li key={i}>
            <h2>{category}</h2>
            <FoodByCatego menu={this.props.menu} catego={category} />
          </li>
        );
      }
    }

    return (
      <div className="background-grey">
        <div className=" screenSize">
          <div classname="foodChoice">
            <ul>{categoriesList}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Catego;
