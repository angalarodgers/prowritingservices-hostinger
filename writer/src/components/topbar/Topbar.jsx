import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./Topbar.scss";

const Topbar = () => {
  const { currentUser } = useContext(AuthContext);
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
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="dashboard">
              New Orders <span className="sr-only">(current)</span>{" "}
            </a>
          </li>
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
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
              style={{ backgroundColor: "#c4e5f2" }}
            >
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="active-orders">
                Orders In Progress
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="completed-orders">
                Completed Orders
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="canceled-orders">
                Canceled Orders
              </a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Current Balance : $ 240.00
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="messages">
              Messages 0
            </a>
          </li>
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
              My Profile
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdown"
              style={{ backgroundColor: "#c4e5f2" }}
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <ul className="header-right pull-right">
            <li className="list-inline-item dropdown">
              <button className="btn btn-outline-info">
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
                  <span className="" style={{ color: "black" }}>
                    Writer ID : {currentUser.id}
                  </span>
                </a>
              </button>
              <div
                className="dropdown-menu dropdown-menu-right dropdown-profile"
                style={{ backgroundColor: "#c4e5f2" }}
              >
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
