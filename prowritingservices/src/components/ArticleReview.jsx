import React from "react";

const ArticleReview = () => {
  return (
    <div className="col-lg-6">
      <div className="row justify-content-start">
        <div className="col-md-12">
          <div className="info">
            <h3>Write My Article Review </h3>
            <strong>Meta Description:</strong>
            <h5>
              Do you need help writing your review articles? Let our expert
              writers help you brainstorm and write high-quality review papers.
            </h5>
            <strong>Text</strong>
            <p>
              Welcome to Pro Writing Services, where you'll find expert article
              writers for hire! Do you need expert assistance with your review
              articles? We have a team of skilled review article writers ready
              to assist you.
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
                    Write My Article Review
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

export default ArticleReview;
