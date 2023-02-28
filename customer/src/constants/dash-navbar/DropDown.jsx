import React from "react";

const DropDown = () => {
  return (
    <ul
      className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
      aria-labelledby="OdropdownMenuButton"
      style={{ backgroundColor: "#A1C5F4" }}
    >
      <li className="mb-2">
        <a className="dropdown-item border-radius-md" href="/new-orders">
          <div className="d-flex py-1">
            <div className="my-auto"></div>
            <div className="d-flex flex-column justify-content-center">
              <h6 className="text-sm font-weight-normal mb-1">
                <span className="font-weight-bold" style={{ color: "#F28322" }}>
                  New Orders
                </span>
              </h6>
              <p className="text-xs text-secondary mb-0 ">
                <i className="fa fa-plus me-1" />
                13 new orders
              </p>
            </div>
          </div>
        </a>
      </li>
      <li className="mb-2">
        <a
          className="dropdown-item border-radius-md"
          href="/orders-in-progress"
        >
          <div className="d-flex py-1">
            <div className="d-flex flex-column justify-content-center">
              <h6 className="text-sm font-weight-normal mb-1">
                <span className="font-weight-bold" style={{ color: "#F28322" }}>
                  Orders Inprogress
                </span>
              </h6>
              <p className="text-xs text-secondary mb-0 ">
                <i className="fa fa-plus me-1" /> 1 order(s) inprogress
              </p>
            </div>
          </div>
        </a>
      </li>
      <li className="mb-2">
        <a className="dropdown-item border-radius-md" href="/completed-orders">
          <div className="d-flex py-1">
            <div className="d-flex flex-column justify-content-center">
              <h6 className="text-sm font-weight-normal mb-1">
                <span className="font-weight-bold" style={{ color: "#F28322" }}>
                  Completed Orders
                </span>
              </h6>
              <p className="text-xs text-secondary mb-0 ">
                <i className="fa fa-plus me-1" /> 1 Finished Orders
              </p>
            </div>
          </div>
        </a>
      </li>
      <li className="mb-2">
        <a className="dropdown-item border-radius-md" href="canceled-orders">
          <div className="d-flex py-1">
            <div className="d-flex flex-column justify-content-center">
              <h6 className="text-sm font-weight-normal mb-1">
                <span className="font-weight-bold" style={{ color: "#F28322" }}>
                  Canceled Orders
                </span>
              </h6>
              <p className="text-xs text-secondary mb-0 ">
                <i className="fa fa-plus me-1" /> 1 order(s) inprogress
              </p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default DropDown;
