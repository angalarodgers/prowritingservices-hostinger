import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";
import { useNavigate } from "react-router-dom";

import { useQuery } from "react-query";
import { useState } from "react";
import DropDown from "./DropDown";

const DashNavbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();
  const logout = async (e) => {
    e.preventDefault();
    try {
      const res = await makeRequest.post("/auth/logout");
      if (res.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { balisLoading, balerror, baldata } = useQuery("pay/getbalance", () =>
    makeRequest.get("/pay/getbalance").then((res) => {
      console.log(res.data);
      setBalance(res.data.balance);
      return res.data;
    })
  );
  return (
    <div
      className="container position-sticky z-index-sticky top-0"
      style={{ marginTop: "-20px" }}
    >
      <div className="row">
        <div className="col-12">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
            <div className="container-fluid pe-0">
              <a
                className="navbar-brand font-weight-bolder ms-lg-0 ms-3 "
                href="/dashboard"
              >
                <i className="fa fa-home opacity-6 text-dark me-1" /> Dashboard
              </a>
              <button
                className="navbar-toggler shadow-none ms-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon mt-2">
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navigation">
                <ul className="navbar-nav mx-auto ms-xl-auto me-xl-7">
                  <li className="nav-item">
                    <a
                      className="nav-link d-flex align-items-center me-2 active"
                      aria-current="page"
                      href="#"
                      id="OdropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-shopping-cart  opacity-6 text-dark me-1" />
                      My Orders
                    </a>
                    <DropDown />
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-2" href="/writers">
                      <i className="fa fa-user opacity-6 text-dark me-1" />
                      Writers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-2" href="/add-funds">
                      <i className="fa fa-money opacity-6 text-dark me-1" />
                      Balance:{" "}
                      <strong style={{ color: "green" }}>${balance}</strong>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-2" href="/notifications">
                      <i className="fa fa-commenting  opacity-6 text-dark me-1" />
                      Notifications
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-2" href="/contact-support">
                      <i className="fa fa-commenting  opacity-6 text-dark me-1" />
                      Contact Suppport
                    </a>
                  </li>
                </ul>
                <li className="nav-item d-flex align-items-center">
                  <a
                    className="btn btn-round btn-sm mb-0 btn-outline-primary me-2"
                    href="/create-order"
                  >
                    Create New Order
                  </a>
                </li>
              </div>
            </div>
          </nav>
          {/* End Navbar */}
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;
