import React, { Component } from "react";

class FoodByCatego extends Component {
  renderPicture(i, catego, menu) {
    if (menu[catego][i].picture) {
      return (
        <img src={menu[catego][i].picture} alt="food" className="foodPic" />
      );
    }
  }

  render() {
    let FoodCards = [];
    let catego = this.props.catego;
    let menu = this.props.menu;

    for (let i = 0; i < menu[catego].length; i++) {
      FoodCards.push(
        <li key={menu[catego][i].id} className="foodCard">
          <div>
            <h3>{menu[catego][i].title}</h3>
            <p>{menu[catego][i].description}</p>
            <p>{menu[catego][i].price + "€"}</p>
          </div>
          {this.renderPicture(i, catego, menu)}
        </li>
      );
    }

    return <ul>{FoodCards}</ul>;
  }
}

export default FoodByCatego;
