import React from "react";

const OpinionArticle = () => {
  return (
    <div className="col-lg-6">
      <div className="row justify-content-start">
        <div className="col-md-12">
          <div className="info">
            <h3>Write My Opinion Article</h3>
            <strong>Meta Description:</strong>
            <h5>
              Are you in need of opinion article writing services? Let our
              writers help you express your thoughts and ideas effectively.
            </h5>
            <strong>Text</strong>
            <p>
              If you are feeling overwhelmed by your academic workload or are
              struggling to complete your assignments, we are ready to help. Our
              team at Pro Writing services offers professional writing services,
              and we would love to help you write a unique and engaging opinion
              article.
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
                    Write My Opinion Article
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

export default OpinionArticle;
