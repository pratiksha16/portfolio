import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        {/*<div className="row">
          <div className="top-bar">
            <a className="menu-toggle" href="#">
              <span>Menu</span>
            </a>
            <div className="logo">
              <a href="index.html">Menu</a>
            </div>
            <nav id="main-nav-wrap">
              <ul className="main-navigation">
                <li className="current">
                  <a className="smoothscroll" href="#intro" title>
                    Home
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#about" title>
                    About
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#resume" title>
                    Resume
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#portfolio" title>
                    Portfolio
                  </a>
                </li>
              </ul>
            </nav>
          </div>{" "}
          {/* /top-bar }
          
          {/* /row */}
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>
          </ul>{" "}
          {/* end #nav */}
        </nav>{" "}
      </React.Fragment>
    );
  }
}
