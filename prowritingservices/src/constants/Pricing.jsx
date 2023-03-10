import React from "react";
import AcceptedPaymentMethod from "./AcceptPaymentMethod";
import WritingTable from "./WritingTable";

const Pricing = () => {
  return (
    <section class="py-3">
      <div class="container">
        <div class="row align-items-center">
          <div className=" text-center">
            <h3>Pricing</h3>
            <h5>Our System is based on</h5>
          </div>
          <ul className="nav nav-pills nav-lg justify-content-center mt-5">
            <li className="nav-item">
              <a
                href="#company-navs-cloud"
                className="nav-link rounded-pill active"
                data-toggle="tab"
              >
                <i className="material-icons text-3xl text-gradient text-info">
                  schedule
                </i>{" "}
                Deadline
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#company-navs-security"
                className="nav-link rounded-pill"
                data-toggle="tab"
              >
                <i className="material-icons text-3xl text-gradient text-info">
                  description
                </i>{" "}
                Number of pages
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#company-navs-support"
                className="nav-link rounded-pill"
                data-toggle="tab"
              >
                <i className="material-icons text-3xl text-gradient text-info">
                  school
                </i>{" "}
                Academic Level
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#company-navs-support"
                className="nav-link rounded-pill"
                data-toggle="tab"
              >
                <i className="material-icons text-3xl text-gradient text-info">
                  edit_note
                </i>{" "}
                Type of Paper
              </a>
            </li>
          </ul>
          <div className="tab-content mt-5">
            <div className="tab-pane fade show active" id="company-navs-cloud">
              <div className="row">
                <div className="col-md-12 py-3 px-md-4 px-xl-5">
                  <h5 className="mb-2">Pricing/pages</h5>
                  <div className="ui-company-text  tx-gray-500">
                    <WritingTable />
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="company-navs-security">
              <div className="row">
                <div className="col-md-12 py-3 px-md-4 px-xl-5">
                  <h5 className="mb-2">Pricing/pages</h5>
                  <div className="ui-company-text  tx-gray-500">
                    <WritingTable />
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="company-navs-support">
              <div className="row">
                <div className="col-md-12 py-3 px-md-4 px-xl-5">
                  <h5 className="mb-2">Pricing/pages</h5>
                  <div className="ui-company-text  tx-gray-500">
                    <WritingTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AcceptedPaymentMethod />
          <a href="https://client.prowritingservice.net/">
            <button type="button" className="btn bg-gradient-warning">
              Place Your Order
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
