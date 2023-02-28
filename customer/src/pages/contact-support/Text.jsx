import React from "react";

const Text = ({ text }) => {
  return (
    <div className="accordion-item mb-3">
      <h5 className="accordion-header" id="headingOne">
        <button
          className="accordion-button border-bottom font-weight-bold collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapseOne${text.id}`}
          aria-expanded="false"
          aria-controls={`collapseOne${text.id}`}
        >
          <i className="fa fa-check"> &nbsp; {text.subject}</i>
          <i
            className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3"
            aria-hidden="true"
          />
          <i
            className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3"
            aria-hidden="true"
          />
        </button>
      </h5>
      <div
        id={`collapseOne${text.id}`}
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionRental"
        style={{}}
      >
        <div className="accordion-body text-sm bg-white opacity-8">
          {text.msg} <br />
          <small> {text.createdAt}</small>
        </div>
      </div>
    </div>
  );
};

export default Text;
