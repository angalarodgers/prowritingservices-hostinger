import React from "react";

const Footer = () => {
  const year = new Date().getFullYear;
  return (
    <footer className="page-footer d-flex justify-content-center">
      <div className="pd-t-4 pd-b-0 pd-x-20">
        <div className="tx-10 tx-uppercase tx-gray-500 tx-spacing-1">
          <p className="pd-y-10 mb-0 ">
            Copyright© {year} | Created By <a href="#">Angala</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
