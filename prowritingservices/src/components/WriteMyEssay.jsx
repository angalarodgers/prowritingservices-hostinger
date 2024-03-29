import React from "react";

const WriteMyEssay = () => {
  return (
    <div className="col-lg-6">
      <div className="row justify-content-start">
        <div className="col-md-12">
          <div className="info">
            <h3>Write My Essay</h3>
            <strong>Meta Description</strong> <br />
            <h5>
              Get quality essay writing assistance from our experienced writers.
              We specialize in online essay writing, including custom essays,
              research papers, and more.{" "}
            </h5>
            <strong>Text</strong>
            <p>
              Welcome to Pro Writing Service, the best essay writing service
              online! If you're looking for top-quality writing assistance for
              your college essays, you've come to the right place. We understand
              that writing essays can be daunting, especially when juggling
              multiple assignments and deadlines. That's why we're here to help
              you with all your essay writing needs.
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
                    Write My Essay
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

export default WriteMyEssay;
