import React from "react";
import Home from "../../components/Home/Home";
import PageNav from "../../components/navbar/PageNav";
import Main from "../main/Main";
import Managers from "../managers/Managers";
import Messages from "../messages/Messages";
import Orders from "../orders/Orders";
import Payment from "../payment/Payment";
import Settings from "../settings/Settings";
import Writers from "../writers/Writers";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <PageNav />
      <div className="row">
        <div className="col-sm-2" style={{ height: "100vh" }}>
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Orders
            </a>
            <a
              className="nav-link"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Writers
            </a>
            <a
              className="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              Messages
            </a>
            <a
              className="nav-link"
              id="v-pills-payment-tab"
              data-toggle="pill"
              href="#v-pills-payment"
              role="tab"
              aria-controls="v-pills-payment"
              aria-selected="false"
            >
              Payments
            </a>
            <a
              className="nav-link"
              id="v-pills-managers-tab"
              data-toggle="pill"
              href="#v-pills-managers"
              role="tab"
              aria-controls="v-pills-managers"
              aria-selected="false"
            >
              Managers
            </a>
            <a
              className="nav-link"
              id="v-pills-sett-tab"
              data-toggle="pill"
              href="#v-pills-sett"
              role="tab"
              aria-controls="v-pills-sett"
              aria-selected="false"
            >
              Settings
            </a>
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade "
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <Main />
            </div>
            <div
              className="tab-pane fade show active"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <Orders />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <Writers />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <Messages />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-payment"
              role="tabpanel"
              aria-labelledby="v-pills-payment-tab"
            >
              <Payment />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-managers"
              role="tabpanel"
              aria-labelledby="v-pills-managers-tab"
            >
              <Managers />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-sett"
              role="tabpanel"
              aria-labelledby="v-pills-sett-tab"
            >
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
