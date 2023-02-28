import React from "react";

const Transaction = ({ bal }) => {
  return (
    <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
      <div className="d-flex align-items-center">
        <button className="btn btn-icon-only btn-rounded btn-outline-info mb-0 me-3 btn-sm d-flex align-items-center justify-content-center">
          <i className="fas fa-arrow-up" />
        </button>
        <div className="d-flex flex-column">
          <h6 className="mb-1 text-dark text-sm">
            {bal.payment_order_id}-{bal.id}
          </h6>
          <span className="text-xs">{bal.madeAt}</span>
        </div>
      </div>
      <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
        + $ {bal.amount}
      </div>
    </li>
  );
};

export default Transaction;
