import React from "react";
import AddModal from "./AddModal";
import Transactions from "./Transactions";

const AddFunds = () => {
  return (
    <div className="container py-4 mt-5">
      <div className="row">
        <div className="col-md-12 mb-lg-0 mb-4">
          <div className="card mt-4">
            <div className="card-header pb-0 p-3">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <h6 className="mb-0">Payments</h6>
                </div>
                <div className="col-6 text-end">
                  <a
                    className="btn bg-gradient-dark mb-0"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-form"
                  >
                    <i className="fas fa-plus" />
                    &nbsp;&nbsp;Add Funds
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <Transactions />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <AddModal />
        </div>
      </div>
    </div>
  );
};

export default AddFunds;
