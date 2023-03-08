import React from "react";
import mastercardImg from "../assets/mastercard.png";
import visaImg from "../assets/visa.png";
import amexImg from "../assets/american_express.png";
import discoverImg from "../assets/discover.png";
import paypalImg from "../assets/paypal.png";
import applePayImg from "../assets/apple_pay.png";
import googlePayImg from "../assets/google_pay.png";
import "./style.css";

const AcceptedPaymentMethod = () => {
  return (
    <div className="container">
      <div className="col-sm-6 col-lg-12 text-center">
        <div className="card-body">
          <span style={{ color: "#A6A6A6" }}>We accept</span>
          <div
            id="creditCardType"
            className="d-flex tx-28 tx-gray-500 mg-t-10 justify-content-center"
          >
            <div className="amex lh-1 m-1">
              <i className="fa fa-cc-amex" />
            </div>
            <div className="visa lh-1 mg-l-5 m-1">
              <i className="fa fa-cc-visa" />
            </div>
            <div className="mastercard lh-1 mg-l-5 m-1">
              <i className="fa fa-cc-mastercard" />
            </div>
            <div className="jcb lh-1 mg-l-5 m-1">
              <i className="fa fa-cc-jcb" />
            </div>
            <div className="discover lh-1 mg-l-5 m-1">
              <i className="fa fa-cc-discover" />
            </div>
            <div className="diners lh-1 mg-l-5 m-1">
              <i className="fa fa-cc-diners-club" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptedPaymentMethod;
