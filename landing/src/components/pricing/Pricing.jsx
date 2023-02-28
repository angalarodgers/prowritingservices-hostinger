import React from "react";
import Prices from "./Prices";

const Pricing = () => {
  return (
    <>
      <h1 className="text-center mg-t-50 " style={{ color: "#737373" }}>
        Pricing
      </h1>
      <div
        className="lead col-md-10 col-lg-8 col-xl-7 text-center tx-gray-500 p-0
        mx-auto mb-4"
      >
        Our essay pricing system is based on:
      </div>

      <div className="row col-md-12 col-lg-12 col-xl-12 text-center p-0 mx-auto">
        <div className="col-6 col-md-2 p-3 bd">
          <div className="display-4  mx-auto mb-3">
            <span className="ti-alarm-clock" style={{ color: "#F27127" }} />
          </div>
          <div className="tx-semibold"> Deadline</div>
        </div>
        <div className="col-6 col-md-2 p-3 bd">
          <div className="display-4  mx-auto mb-3">
            <span className="ti-files" style={{ color: "#F27127" }} />
          </div>
          <div className="tx-semibold"> Number of Pages</div>
        </div>
        <div className="col-6 col-md-2 p-3 bd">
          <div className="display-4  mx-auto mb-3">
            <span className="ti-write" style={{ color: "#F27127" }} />
          </div>
          <div className="tx-semibold"> Number of words</div>
        </div>
        <div className="col-6 col-md-2 p-3 bd">
          <div className="display-4  mx-auto mb-3">
            <span className="ti-layers" style={{ color: "#F27127" }} />
          </div>
          <div className="tx-semibold"> Academic Level</div>
        </div>
        <div className="col-6 col-md-2 p-3 bd">
          <div className="display-4  mx-auto mb-3">
            <span className="ti-pencil-alt" style={{ color: "#F27127" }} />
          </div>
          <div className="tx-semibold"> Type of Paper</div>
        </div>
        <div className="col-6 col-md-2 p-3 bd">
          <div className="display-4  mx-auto mb-3">
            <span className="ti-star" style={{ color: "#F27127" }} />
          </div>
          <div className="tx-semibold"> Special Request</div>
        </div>
      </div>
      <Prices />
    </>
  );
};

export default Pricing;
