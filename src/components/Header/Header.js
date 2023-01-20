import React from "react";
import { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="container">
        <div className="logo">
          <a href="#">
            <img src="./l.png" alt="" />
          </a>
        </div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Business</a>
          <a href="#">Explore</a>
        </div>
      </header>
    );
  }
}

export default Header;
