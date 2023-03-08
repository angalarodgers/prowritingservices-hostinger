import React from "react";

const WriteMyCaseStudy = () => {
  return (
    <div className="col-lg-6">
      <div className="row justify-content-start">
        <div className="col-md-12">
          <div className="info">
            <h3>Write My Case Study</h3>
            <strong>Meta Description:</strong>
            <h5>
              Are you looking for case study writing assistance? Our team of
              academic writers offers professional and customized case studies
              tailored to your unique needs.
            </h5>
            <strong>Text</strong>
            <p>
              At Pro Writing Services, we offer customized case study writing
              services designed to meet your unique needs. Whether you are
              looking for guidance on how to write a case study or need help
              with the entire case study design, we would love to help. We offer
              a wide range of services, including in-depth case study research,
              data analysis, writing and editing, formatting, and proofreading.
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
                    Write My Case Study
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

export default WriteMyCaseStudy;
