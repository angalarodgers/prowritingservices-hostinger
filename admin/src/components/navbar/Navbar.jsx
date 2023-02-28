import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <div
        className="btn-group d-flex justify-content-center"
        role="group"
        aria-label="Basic example"
      >
        <button type="button" className="btn btn-info">
          My Orders
        </button>
        <button type="button" className="btn btn-info">
          Finished Orders
        </button>
        <button type="button" className="btn btn-info">
          Cnaceled Orders
        </button>
        <button type="button" className="btn btn-info">
          Current Balance
        </button>
        <button type="button" className="btn btn-info">
          Messages
        </button>
        <button type="button" className="btn btn-info">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default Navbar;
