import React from "react";
import WritingTable from "./WritingTable";

const Prices = () => {
  return (
    <>
      <ul className="nav nav-pills nav-lg justify-content-center mt-5">
        <li className="nav-item">
          <a
            href="#company-navs-cloud"
            className="nav-link rounded-pill active"
            data-toggle="tab"
          >
            <i className="ti-cloud align-middle" /> Writing From Scratch
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#company-navs-security"
            className="nav-link rounded-pill"
            data-toggle="tab"
          >
            <i className="ti-heart align-middle" /> Editing/ Proofreading/
            Rewriting
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#company-navs-support"
            className="nav-link rounded-pill"
            data-toggle="tab"
          >
            <i className="ti-rocket align-middle" /> Programming
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
    </>
  );
};

export default Prices;
