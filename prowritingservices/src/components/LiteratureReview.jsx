import React from "react";

const LiteratureReview = () => {
  return (
    <div className="col-lg-6">
      <div className="row justify-content-start">
        <div className="col-md-12">
          <div className="info">
            <h3>Write My Literature Review</h3>
            <strong>Meta Description:</strong>
            <h5>
              Enjoy expert literature review writing services offered by
              experienced writers. Get personalized writing assistance at your
              convenience!
            </h5>
            <strong>Text</strong>
            <p>
              Welcome to our Literature review writing service page. Whether you
              need to write a well-written literature review for your thesis or
              as part of your college coursework, we are here to help. We take
              every aspect of your academic work seriously and are committed to
              offering only the best writing services.
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
                    Write My Literature Review
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

export default LiteratureReview;
