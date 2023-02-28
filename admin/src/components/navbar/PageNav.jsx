import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const PageNav = () => {
  const today = new Date().getDate;
  return (
    <div className="container-fluid">
      <div className="pageheader pd-t-25 pd-b-35">
        <div className="d-flex justify-content-between">
          <div className="clearfix">
            <div className="pd-t-5 pd-b-5">
              <h1 className="pd-0 mg-0 tx-20 amin-title">Admin</h1>
            </div>
            <div className="breadcrumb pd-0 mg-0">
              <span className="breadcrumb-item active">{today}</span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Link to="../main">
              <button
                type="button"
                className="btn btn-outline-info mb-2 mb-md-0 d-none d-lg-block pd-t-6-force pd-b-5-force"
              >
                <i data-feather="download" className="wd-16 mr-2" />
                Main Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNav;
