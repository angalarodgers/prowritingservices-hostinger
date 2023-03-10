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
          href="#"
          rel="tooltip"
          title="Designed and Coded by Creative Tim"
          data-placement="bottom"
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
                  <a href="./" className="dropdown-item border-radius-md">
                    <span>Home</span>
                  </a>
                  <a
                    href="./about-us"
                    className="dropdown-item border-radius-md"
                  >
                    <span>About Us</span>
                  </a>
                  <a href="./faq" className="dropdown-item border-radius-md">
                    <span>F.A.Q</span>
                  </a>
                </div>
                <div className="d-lg-none">
                  <a href="./" className="dropdown-item border-radius-md">
                    <span>Home</span>
                  </a>
                  <a
                    href="./about-us"
                    className="dropdown-item border-radius-md"
                  >
                    <span>About Us</span>
                  </a>
                  <a href="./faq" className="dropdown-item border-radius-md">
                    <span>F.A.Q</span>
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
                      </div>
                    </a>
                  </li>
                  <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                    <a
                      className="dropdown-item py-2 ps-3 border-radius-md"
                      href="./writer-my-lab-report"
                    >
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Write My Lab Report
                          </h6>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                    <a
                      className="dropdown-item py-2 ps-3 border-radius-md"
                      href="./writer-my-literature-review"
                    >
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Write My Literature Review
                          </h6>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                    <a
                      className="dropdown-item py-2 ps-3 border-radius-md"
                      href="./writer-my-opinion-article"
                    >
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Write My Opinion Article
                          </h6>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                    <a
                      className="dropdown-item py-2 ps-3 border-radius-md"
                      href="./writer-my-article-review"
                    >
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                            Write My Article Review
                          </h6>
                        </div>
                      </div>
                    </a>
                  </li>
                </div>
                <div className="row d-lg-none">
                  <div className="col-md-12">
                    <div className="d-flex mb-2">
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
                        </div>
                      </a>
                    </div>

                    <div className="d-flex mb-2 mt-3">
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
                        </div>
                      </a>
                    </div>

                    <div className="d-flex mb-2 mt-3">
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
                        </div>
                      </a>
                    </div>

                    <div className="d-flex mb-2 mt-3">
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
                        </div>
                      </a>
                    </div>

                    <div className="d-flex mb-2 mt-3">
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
                        </div>
                      </a>
                    </div>

                    <div className="d-flex mb-2 mt-3">
                      <a
                        className="dropdown-item py-2 ps-3 border-radius-md"
                        href="./writer-my-lab-report"
                      >
                        <div className="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Write My Lab Report
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="d-flex mb-2 mt-3">
                      <a
                        className="dropdown-item py-2 ps-3 border-radius-md"
                        href="./writer-my-literature-review"
                      >
                        <div className="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Write My Literature Review
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="d-flex mb-2 mt-3">
                      <a
                        className="dropdown-item py-2 ps-3 border-radius-md"
                        href="./writer-my-opinion-article"
                      >
                        <div className="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Write My Opinion Article
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="d-flex mb-2 mt-3">
                      <a
                        className="dropdown-item py-2 ps-3 border-radius-md"
                        href="./writer-my-article-review"
                      >
                        <div className="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Write My Article Review
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
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
                        href=" # "
                      >
                        <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                          Blog
                        </h6>
                      </a>
                    </li>
                    <li className="nav-item list-group-item border-0 p-0">
                      <a
                        className="dropdown-item py-2 ps-3 border-radius-md"
                        href=" # "
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
                      href="#"
                    >
                      <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                        Blog
                      </h6>
                    </a>
                    <a
                      className="dropdown-item py-2 ps-3 border-radius-md"
                      href="#"
                    >
                      <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                        Academic Writing
                      </h6>
                      <span className="text-sm">
                        See our academic writings papers, software and apps
                      </span>
                    </a>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item ms-lg-auto">
              <a
                className="nav-link nav-link-icon me-2"
                href="https://prowritingservice.net/client/"
              >
                <i className="fa fa-user me-1" />
                <p
                  className="d-inline text-sm z-index-1 font-weight-bold"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Sign in or Register into an Account"
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
