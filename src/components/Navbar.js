import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg" 
    style={{position:"sticky",top:"0",zIndex:"1"}}
    >
    
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          {props.name}
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                id="home_button"
                onClick={() => {
                  document
                    .getElementById("about_button")
                    .classList.remove("active");
                  document
                    .getElementById("home_button")
                    .classList.add("active");
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                id="about_button"
                onClick={() => {
                  document
                    .getElementById("about_button")
                    .classList.add("active");
                  document
                    .getElementById("home_button")
                    .classList.remove("active");
                }}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  name: propTypes.string,
};

Navbar.defaultProps = {
  name: "Set name here",
};
