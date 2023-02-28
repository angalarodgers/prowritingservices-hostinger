import React from "react";

const DashFooter = () => {
  return (
    <footer className="footer pt-3  ">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              <strong>
                <span style={{ color: "#5B7BA6" }}>Pro</span>
                <span style={{ color: "#F27329" }}>Writing</span>
                <span style={{ color: "#5B7BA6" }}>Services</span>
              </strong>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a href="#" className="nav-link text-muted" target="_blank">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-muted" target="_blank">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-muted" target="_blank">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link pe-0 text-muted"
                  target="_blank"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashFooter;
