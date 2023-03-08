import React from "react";

const Home = () => {
  return (
    <div className="col-lg-6">
      <div className="row justify-content-start">
        <div className="col-md-12">
          <div className="info">
            <h3>Quality Technical Writing Services</h3>
            <h5>Looking for an expert to work on your assignment?</h5>
            <p>
              We have an excelent team of experienced technical writers to
              assist you at any time. Share paper instructions with our writers.
              Sit back and wait for the complete paper.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-start mt-4">
        <div className="col-md-12">
          <div className="info">
            <button type="button" className="btn btn-warning">
              Order My Paper
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
