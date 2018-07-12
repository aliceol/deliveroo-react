import React, { Component } from "react";

class Cart extends Component {
  render() {
    if (this.props.cart.length === 0) {
      return (
        <div className="Cart">
          <div className="cart-validation">Valider mon panier</div>
          <div>Votre panier est vide</div>
        </div>
      );
    } else {
      const basketMenus = [];

      for (let i = 0; i < this.props.cart.length; i++) {
        basketMenus.push(
          <li key={this.props.cart[i].id}>
            <button onClick={() => this.props.decrement(this.props.cart[i].id)}>
              -
            </button>
            <span>{this.props.cart[i].quantity}</span>
            <button onClick={() => this.props.increment(this.props.cart[i].id)}>
              +
            </button>
            <span>{this.props.cart[i].title}</span>
          </li>
        );
      }

      return (
        <div className="Cart">
          <div className="cart-validation">Valider mon panier</div>
          <ul>{basketMenus}</ul>
        </div>
      );
    }
  }
}

export default Cart;
