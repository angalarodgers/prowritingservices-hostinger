import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import ButtonWrapper from "./ButtonWrapper";

const AddModal = () => {
  const apiKey = import.meta.env.VITE_CLIENT_ID;
  const [pay, setPay] = useState({
    amount: null,
    style: { layout: "vertical" },
  });
  const [errors, setErrors] = useState();
  const handleChange = (e) => {
    setPay({ ...pay, [e.target.name]: e.target.value });
    console.log(pay);
  };
  return (
    <>
      <div>
        <div
          className="modal fade"
          id="modal-form"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modal-form"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-sm"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className="card card-plain">
                  <div className="card-header pb-0 text-left">
                    <h3 className="font-weight-bolder text-info text-gradient">
                      Add Funds to your account
                    </h3>
                    <p className="mb-0">Enter Amount</p>
                  </div>
                  <div className="card-body">
                    <form role="form text-left">
                      <label>Amount</label>
                      <div className="input-group mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter Amount"
                          aria-label="funds"
                          aria-describedby="fund"
                          name="amount"
                          onChange={handleChange}
                          value={pay.amount}
                        />
                      </div>

                      <div className="text-center">
                        <div>
                          <PayPalScriptProvider
                            options={{
                              "client-id": apiKey,
                              components: "buttons",
                              currency: "USD",
                            }}
                          >
                            <ButtonWrapper
                              currency={pay.currency}
                              showSpinner={false}
                              pay={pay}
                              setErrors={setErrors}
                            />
                          </PayPalScriptProvider>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center pt-0 px-lg-2 px-1">
                    <div
                      id="creditCardType"
                      className="d-flex justify-content-center tx-28 tx-gray-500 mg-t-10"
                    >
                      <div className="amex lh-1">
                        <i className="fa fa-cc-amex" />
                      </div>
                      <div className="visa lh-1 mg-l-5">
                        <i className="fa fa-cc-visa" />
                      </div>
                      <div className="mastercard lh-1 mg-l-5">
                        <i className="fa fa-cc-mastercard" />
                      </div>
                      <div className="jcb lh-1 mg-l-5">
                        <i className="fa fa-cc-jcb" />
                      </div>
                      <div className="discover lh-1 mg-l-5">
                        <i className="fa fa-cc-discover" />
                      </div>
                      <div className="diners lh-1 mg-l-5">
                        <i className="fa fa-cc-diners-club" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddModal;
