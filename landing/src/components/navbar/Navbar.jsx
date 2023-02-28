import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <a className="navbar-brand tx-bold" href="#">
          <strong style={{ color: "#F27127" }}>P</strong>
          <small style={{ color: "#5881A6" }}>ro</small>
          <small style={{ color: "#F27127" }}>Writing</small>
          <small style={{ color: "#5881A6" }}>Services</small>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/" style={{ color: "#F27127" }}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="services">
                Services &nbsp;&nbsp;
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about-us">
                About Us &nbsp;&nbsp;
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog">
                Blog &nbsp;&nbsp;
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="FAQ">
                FAQ &nbsp;&nbsp;
              </a>
            </li>
          </ul>
          <form className="form-inline">
            <a
              href="http://localhost:5174/login"
              className="btn btn-outline-warning my-2 my-sm-0"
              style={{ borderRadius: "10px" }}
            >
              <span className="ti-user" style={{ color: "#537FA6" }}></span> My
              Account
            </a>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
