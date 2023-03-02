import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3  navbar-transparent ">
      <div
        className="container"
        style={{ backgroundColor: "#F27127", borderRadius: "10px" }}
      >
        <a
          className="navbar-brand  text-white "
          href="https://demos.creative-tim.com/material-kit/presentation"
          rel="tooltip"
          title="Designed and Coded by Creative Tim"
          data-placement="bottom"
          target="_blank"
        >
          ProWritingServices
        </a>
        <button
          className="navbar-toggler shadow-none ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </span>
        </button>
        <div
          className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5"
          id="navigation"
        >
          <ul className="navbar-nav navbar-nav-hover ms-auto">
            <li className="nav-item dropdown dropdown-hover mx-2 ms-lg-6">
              <a
                className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                id="dropdownMenuPages8"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="material-icons opacity-6 me-2 text-md">
                  dashboard
                </i>
                Main
                <img
                  src="../assets/img/down-arrow-white.svg"
                  alt="down-arrow"
                  className="arrow ms-2 d-lg-block d-none"
                />
                <img
                  src="../assets/img/down-arrow-dark.svg"
                  alt="down-arrow"
                  className="arrow ms-2 d-lg-none d-block"
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-lg mt-0 mt-lg-3"
                aria-labelledby="dropdownMenuPages8"
              >
                <div className="d-none d-lg-block">
                  <a
                    href="../pages/author.html"
                    className="dropdown-item border-radius-md"
                  >
                    <span>Home</span>
                  </a>
                  <a
                    href="../pages/about-us.html"
                    className="dropdown-item border-radius-md"
                  >
                    <span>About Us</span>
                  </a>
                  <a
                    href="../pages/contact-us.html"
                    className="dropdown-item border-radius-md"
                  >
                    <span>Contact Us</span>
                  </a>
                </div>
                <div className="d-lg-none">
                  <a
                    href="../pages/author.html"
                    className="dropdown-item border-radius-md"
                  >
                    <span>Home</span>
                  </a>
                  <a
                    href="../pages/about-us.html"
                    className="dropdown-item border-radius-md"
                  >
                    <span>About Us</span>
                  </a>
                  <a
                    href="../pages/contact-us.html"
                    className="dropdown-item border-radius-md"
                  >
                    <span>Contact Us</span>
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown dropdown-hover mx-2">
              <a
                className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                id="dropdownMenuBlocks"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="material-icons opacity-6 me-2 text-md">
                  view_day
                </i>
                Services
                <img
                  src="../assets/img/down-arrow-white.svg"
                  alt="down-arrow"
                  className="arrow ms-2 d-lg-block d-none"
                />
                <img
                  src="../assets/img/down-arrow-dark.svg"
                  alt="down-arrow"
                  className="arrow ms-2 d-lg-none d-block"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-animation dropdown-menu-end dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
                aria-labelledby="dropdownMenuBlocks"
              >
                <div className="d-none d-lg-block">
                  <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                    <a
                      className="dropdown-item py-2 ps-3 border-radius-md"
                      href="./writer-my-essay"
                    >
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Write My Essay
                          </h6>
                        </div>
                        <img
                          src="../assets/img/down-arrow.svg"
                          alt="down-arrow"
                          className="arrow"
                        />
                      </div>
                    </a>
                  </li>
                  <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                    <a
                      className="dropdown-item py-2 ps-3 border-radius-md"
                      href="./writer-my-research-proposal"
                    >
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Write My Research Proposal
                          </h6>
                        </div>
                        <img
                          src="../assets/img/down-arrow.svg"
                          alt="down-arrow"
                          className="arrow"
                        />
                      </div>
                    </a>
                  </li>
                  <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                    <a
                      className="dropdown-item py-2 ps-3 border-radius-md"
                      href="./writer-my-research-paper"
                    >
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Write My Research Paper
                          </h6>
                        </div>
                        <img
                          src="../assets/img/down-arrow.svg"
                          alt="down-arrow"
                          className="arrow"
                        />
                      </div>
                    </a>
                  </li>
                  <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                    <a
                      className="dropdown-item py-2 ps-3 border-radius-md"
                      href="./writer-my-case-study"
                    >
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Write My Case Study
                          </h6>
                        </div>
                        <img
                          src="../assets/img/down-arrow.svg"
                          alt="down-arrow"
                          className="arrow"
                        />
                      </div>
                    </a>
                  </li>
                  <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                    <a
                      className="dropdown-item py-2 ps-3 border-radius-md"
                      href="./writer-my-thesis-dissertation"
                    >
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Write My Thesis Dissertation
                          </h6>
                        </div>
                        <img
                          src="../assets/img/down-arrow.svg"
                          alt="down-arrow"
                          className="arrow"
                        />
                      </div>
                    </a>
                  </li>
                </div>
                <div className="row d-lg-none">
                  <div className="col-md-12">
                    <div className="d-flex mb-2">
                      <div className="icon h-10 me-3 d-flex mt-1">
                        <i className="ni ni-single-copy-04 text-gradient text-primary" />
                      </div>
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Page Sections
                          </h6>
                        </div>
                      </div>
                    </div>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/page-sections/hero-sections.html"
                    >
                      Page Headers
                    </a>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/page-sections/features.html"
                    >
                      Features
                    </a>
                    <div className="d-flex mb-2 mt-3">
                      <div className="icon h-10 me-3 d-flex mt-1">
                        <i className="ni ni-laptop text-gradient text-primary" />
                      </div>
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Navigation
                          </h6>
                        </div>
                      </div>
                    </div>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/navigation/navbars.html"
                    >
                      Navbars
                    </a>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/navigation/nav-tabs.html"
                    >
                      Nav Tabs
                    </a>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/navigation/pagination.html"
                    >
                      Pagination
                    </a>
                    <div className="d-flex mb-2 mt-3">
                      <div className="icon h-10 me-3 d-flex mt-1">
                        <i className="ni ni-badge text-gradient text-primary" />
                      </div>
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Input Areas
                          </h6>
                        </div>
                      </div>
                    </div>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/input-areas/inputs.html"
                    >
                      Inputs
                    </a>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/input-areas/forms.html"
                    >
                      Forms
                    </a>
                    <div className="d-flex mb-2 mt-3">
                      <div className="icon h-10 me-3 d-flex mt-1">
                        <i className="ni ni-notification-70 text-gradient text-primary" />
                      </div>
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Attention Catchers
                          </h6>
                        </div>
                      </div>
                    </div>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/attention-catchers/alerts.html"
                    >
                      Alerts
                    </a>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/attention-catchers/modals.html"
                    >
                      Modals
                    </a>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/attention-catchers/tooltips-popovers.html"
                    >
                      Tooltips &amp; Popovers
                    </a>
                    <div className="d-flex mb-2 mt-3">
                      <div className="icon h-10 me-3 d-flex mt-1">
                        <i className="ni ni-app text-gradient text-primary" />
                      </div>
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Elements
                          </h6>
                        </div>
                      </div>
                    </div>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/elements/avatars.html"
                    >
                      Avatars
                    </a>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/elements/badges.html"
                    >
                      Badges
                    </a>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/elements/breadcrumbs.html"
                    >
                      Breadcrumbs
                    </a>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/elements/buttons.html"
                    >
                      Buttons
                    </a>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/elements/dropdowns.html"
                    >
                      Dropdowns
                    </a>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/elements/progress-bars.html"
                    >
                      Progress Bars
                    </a>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/elements/toggles.html"
                    >
                      Toggles
                    </a>
                    <a
                      className="dropdown-item ps-3 border-radius-md mb-1"
                      href="../sections/elements/typography.html"
                    >
                      Typography
                    </a>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item dropdown dropdown-hover mx-2">
              <a
                className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                id="dropdownMenuDocs"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="material-icons opacity-6 me-2 text-md">article</i>
                Blog
                <img
                  src="../assets/img/down-arrow-white.svg"
                  alt="down-arrow"
                  className="arrow ms-2 d-lg-block d-none"
                />
                <img
                  src="../assets/img/down-arrow-dark.svg"
                  alt="down-arrow"
                  className="arrow ms-2 d-lg-none d-block"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-animation dropdown-menu-end dropdown-md dropdown-md-responsive mt-0 mt-lg-3 p-3 border-radius-lg"
                aria-labelledby="dropdownMenuDocs"
              >
                <div className="d-none d-lg-block">
                  <ul className="list-group">
                    <li className="nav-item list-group-item border-0 p-0">
                      <a
                        className="dropdown-item py-2 ps-3 border-radius-md"
                        href=" https://www.creative-tim.com/learning-lab/bootstrap/overview/material-kit "
                      >
                        <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                          News
                        </h6>
                        <span className="text-sm">
                          All about News and Upcoming events
                        </span>
                      </a>
                    </li>
                    <li className="nav-item list-group-item border-0 p-0">
                      <a
                        className="dropdown-item py-2 ps-3 border-radius-md"
                        href=" https://www.creative-tim.com/learning-lab/bootstrap/colors/material-kit "
                      >
                        <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                          Academic Writing
                        </h6>
                        <span className="text-sm">
                          See our academic writings papers, software and apps
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="row d-lg-none">
                  <div className="col-md-12 g-0">
                    <a
                      className="dropdown-item py-2 ps-3 border-radius-md"
                      href="../pages/about-us.html"
                    >
                      <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                        News
                      </h6>
                      <span className="text-sm">
                        All about News and Upcoming events
                      </span>
                    </a>
                    <a
                      className="dropdown-item py-2 ps-3 border-radius-md"
                      href="../pages/about-us.html"
                    >
                      <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                        Academic Writing
                      </h6>
                      <span className="text-sm">
                        See our colors, icons and typography
                      </span>
                    </a>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item ms-lg-auto">
              <a className="nav-link nav-link-icon me-2" href="/login">
                <i className="fa fa-user me-1" />
                <p
                  className="d-inline text-sm z-index-1 font-weight-bold"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Star us on Github"
                >
                  My Account
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
