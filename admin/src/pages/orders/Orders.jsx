import React from "react";
import NewOrders from "../../components/newOrders/NewOrders";
import ActiveOrders from "./ActiveOrders";
import CanceledOrders from "./CanceledOrders";
import CompletedOrders from "./CompletedOrders";
import "./Orders.scss";

const Orders = () => {
  return (
    <div className="container">
      <div>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              New Orders
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Active Orders
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Completed Orders
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-canceled-tab"
              data-toggle="pill"
              href="#pills-canceled"
              role="tab"
              aria-controls="pills-canceled"
              aria-selected="false"
            >
              Canceled Orders
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <NewOrders />
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <ActiveOrders />
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <CompletedOrders />
          </div>
          <div
            className="tab-pane fade"
            id="pills-canceled"
            role="tabpanel"
            aria-labelledby="pills-canceled-tab"
          >
            <CanceledOrders />
          </div>
        </div>
      </div>

      {/* <NewOrders /> */}
    </div>
  );
};

export default Orders;
