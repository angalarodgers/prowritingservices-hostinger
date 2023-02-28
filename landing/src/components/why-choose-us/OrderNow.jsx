import React from "react";

const OrderNow = () => {
  return (
    <div className="col-lg-4 text-lg-left text-center pd-md-30">
      <div
        className="card border-0 mr-xl-5"
        style={{
          backgroundColor: "#F2F2F2",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "15px",
        }}
      >
        <div className="card-body">
          <h6 className="d-flex justify-content-center">Place your order</h6>
          <form className="mb-3">
            <div className="form-group">
              <label className="form-label">Type of paper</label>
              <select
                name="paper_type"
                id="paper_type"
                className="form-control"
              >
                <option value="">Select...</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Academic Level</label>
              <select
                name="paper_type"
                id="paper_type"
                className="form-control"
              >
                <option value="">Select...</option>
              </select>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-sm-6">
                  {" "}
                  <label className="form-label">Deadline</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-sm-6">
                  {" "}
                  <label className="form-label">.</label>
                  <input type="time" className="form-control" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-sm-6">
                  <label className="form-label">Pages</label>
                  <input type="text" className="form-control" placeholder="1" />
                </div>
                <div className="col-sm-6">
                  <label className="form-label">Words</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="275"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-warning btn-block"
              style={{ color: "white", borderRadius: "10px" }}
            >
              Order Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
