import React, { useEffect, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./Topbar.scss";
const Topbar = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bd">
      <a className="navbar-brand tx-bold" href="#">
        P.W.S
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="dashboard">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li> */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Orders
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="new-orders">
                New Orders
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="active-orders">
                Orders In progress
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="canceled-orders">
                Canceled Orders
              </a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <ul className="header-right pull-right">
            <li className="list-inline-item dropdown">
              <a
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="assets/images/users-face/1.png"
                  className="img-fluid wd-30 ht-30 rounded-circle"
                  alt
                />
              </a>
              &nbsp;
              <a
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="" style={{ color: "grey" }}>
                  {currentUser.email}
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-profile">
                <div className="user-profile-area">
                  <div className="user-profile-heading">
                    <div className="profile-thumbnail">
                      <img
                        src="assets/images/users-face/1.png"
                        className="img-fluid wd-35 ht-35 rounded-circle"
                        alt
                      />
                    </div>
                    <div className="profile-text">
                      <h6>Admin ID : {currentUser.id}</h6>
                      <span>{currentUser.email}</span>
                    </div>
                  </div>
                  <a href className="dropdown-item">
                    <i data-feather="user" className="wd-16 mr-2" /> My profile
                  </a>
                  <a href className="dropdown-item">
                    <i data-feather="message-square" className="wd-16 mr-2" />{" "}
                    Messages
                  </a>
                  <a href className="dropdown-item">
                    <i data-feather="settings" className="wd-16 mr-2" />{" "}
                    Settings
                  </a>
                  <a href className="dropdown-item">
                    <i data-feather="activity" className="wd-16 mr-2" /> My
                    Activity
                  </a>
                  <a href className="dropdown-item">
                    <i data-feather="download" className="wd-16 mr-2" /> My
                    Download
                  </a>
                  <a href className="dropdown-item">
                    <i data-feather="life-buoy" className="wd-16 mr-2" />{" "}
                    Support
                  </a>
                  <a href="aut-logign-register.html" className="dropdown-item">
                    <i data-feather="power" className="wd-16 mr-2" /> Sign-out
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </nav>
  );
};

export default Topbar;
