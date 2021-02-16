import React, { Component } from "react";
import { connect } from "react-redux";
import { IconContext } from "react-icons/lib";
import { RiStarFill, RiSearch2Line, RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="header__container">
            <div className="header__container-logo">
              <Link to="/">
                <IconContext.Provider value={{ size: 50, color: "#ecae34" }}>
                  <RiStarFill />
                </IconContext.Provider>
              </Link>
            </div>

            <div className="header__container-right-sec">
              <IconContext.Provider value={{ color: "#ffffff", size: 30 }}>
                <ul className="header__container-right-sec-menu">
                  
                  <li className="items">
                    <RiSearch2Line />
                  </li>
                  
                  <li className="items dropdown">
                    <Link to="/cart" className="cart">
                      <RiShoppingCartLine />
                      <span className="cart_badge" id="navbarDropdown">{this.props.cartCount}</span>
                    </Link>
                  </li>
                </ul>
              </IconContext.Provider>
            </div>
          </div>
        </header>
      </>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    age: store.r1.age,
    cartCount: store.sl.cartitemCount,
    cartList: store.sl.cartList
  };
};

export default connect(mapStoreToProps)(Header);
