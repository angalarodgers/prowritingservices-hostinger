import React from "react";

const LabReport = () => {
  return (
    <div className="col-lg-6">
      <div className="row justify-content-start">
        <div className="col-md-12">
          <div className="info">
            <h3>Write My Lab Report</h3>
            <strong>Meta Description:</strong>
            <h5>
              Get custom lab report writing assistance from our professional lab
              report writers at Pro Writing Services. Make your order today!
            </h5>
            <strong>Text</strong>
            <p>
              Welcome to Pro Writing Services, your one-stop solution for all
              your academic writing needs. If you are running out of time and
              need professional assistance with your lab reports, our team of
              experienced lab report writers is ready to help.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-start mt-4">
        <div className="col-md-12">
          <div className="info">
            <i className="material-icons text-3xl text-gradient text-info mb-3">
              add
            </i>
            <p>
              <div className="row">
                <div className="col-sm-4">
                  {" "}
                  <button type="button" className="btn bg-gradient-warning">
                    Read More...
                  </button>
                </div>
                <div className="col-sm-6">
                  <button type="button" className="btn bg-gradient-warning">
                    Write My Lab Report
                  </button>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabReport;
