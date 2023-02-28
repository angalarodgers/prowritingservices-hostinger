import React from "react";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="col-sm-12">
        <div className="row row-xs">
          <div className="col-sm-6">
            <div className="card mg-b-30">
              <div className="card-body">
                <div className="media d-inline-flex">
                  <div>
                    <span className="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">
                      Growth
                    </span>
                    <h2 className="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark">
                      $<span className="counter">2,450</span>
                    </h2>
                  </div>
                </div>
                <div className="clearfix">
                  <span className="float-left tx-11 tx-gray-500">
                    Achievement
                  </span>
                  <span className="float-right">
                    <i className="ion-android-arrow-up mr-1 tx-success" />
                    <span className="tx-dark">92</span>
                    <span className="small mg-b-0">/100</span>
                  </span>
                </div>
                <div className="progress ht-3">
                  <div
                    className="progress-bar bg-primary wd-90p"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card mg-b-30">
              <div className="card-body">
                <div className="media d-inline-flex">
                  <div>
                    <span className="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">
                      Project
                    </span>
                    <h2 className="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark">
                      <span className="counter">2,320</span>{" "}
                    </h2>
                  </div>
                </div>
                <div className="clearfix">
                  <span className="float-left tx-11 tx-gray-500">
                    Achievement
                  </span>
                  <span className="float-right">
                    <i className="ion-android-arrow-up mr-1 tx-success" />
                    <span className="tx-dark">95</span>
                    <span className="small mg-b-0">/100</span>
                  </span>
                </div>
                <div className="progress ht-3">
                  <div
                    className="progress-bar bg-warning wd-95p"
                    role="progressbar"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card mg-b-30">
              <div className="card-body">
                <div className="media d-inline-flex">
                  <div>
                    <span className="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">
                      Income
                    </span>
                    <h2 className="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark">
                      $<span className="counter">9,750</span>{" "}
                    </h2>
                  </div>
                </div>
                <div className="clearfix">
                  <span className="float-left tx-11 tx-gray-500">
                    Achievement
                  </span>
                  <span className="float-right">
                    <i className="ion-android-arrow-down mr-1 tx-danger" />
                    <span className="tx-dark">81</span>
                    <span className="small mg-b-0">/100</span>
                  </span>
                </div>
                <div className="progress ht-3">
                  <div
                    className="progress-bar bg-danger wd-80p"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card mg-b-30">
              <div className="card-body">
                <div className="media d-inline-flex">
                  <div>
                    <span className="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">
                      Employers
                    </span>
                    <h2 className="tx-20 tx-sm-18 tx-md-24 mb-0 mt-2 mt-sm-0 tx-normal tx-rubik tx-dark">
                      <span className="counter">1,250</span>{" "}
                    </h2>
                  </div>
                </div>
                <div className="clearfix">
                  <span className="float-lef tx-11 tx-gray-500">
                    Achievement
                  </span>
                  <span className="float-right">
                    <i className="ion-android-arrow-down mr-1 tx-success" />
                    <span className="tx-dark">85</span>
                    <span className="small mg-b-0">/100</span>
                  </span>
                </div>
                <div className="progress ht-3">
                  <div
                    className="progress-bar bg-teal wd-85p"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="card mg-b-30">
          <div className="card-header d-sm-flex justify-content-between bd-b-0 pd-t-20 pd-b-20">
            <div className="mg-b-10 mg-sm-b-0">
              <h6 className="mg-b-5">Current Projects Status</h6>
              <p className="tx-12 tx-gray-500 mg-b-0">
                as of 10th to 17th of March 2019
              </p>
            </div>
            <ul className="list-inline tx-uppercase tx-10 tx-spacing-1 mg-b-0">
              <li className="list-inline-item">
                <span className="d-inline-block wd-7 ht-7 bg-primary rounded-circle mg-r-5" />
                New Projects
              </li>
              <li className="list-inline-item mg-l-10">
                <span className="d-inline-block wd-7 ht-7 bg-pink rounded-circle mg-r-5" />
                Unsolved Projects
              </li>
              <li className="list-inline-item mg-l-10">
                <span className="d-inline-block wd-7 ht-7 bg-success rounded-circle mg-r-5" />
                Solved Projects
              </li>
            </ul>
          </div>
          <br />

          <div className="card-footer pd-y-15 pd-x-20">
            <div className="row row-sm">
              <div className="col-md-4 mg-t-20 mg-sm-t-0">
                <h5 className="tx-normal tx-rubik mg-b-10">256 +</h5>
                <div className="progress ht-3 mg-b-10">
                  <div
                    className="progress-bar wd-90p bg-primary"
                    role="progressbar"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={90}
                  />
                </div>

                <h6 className="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">
                  New Projects
                </h6>
                <p className="tx-10 mg-b-0 tx-gray-500">
                  <span className="tx-medium tx-success">
                    1.2% <i className="ti-arrow-up tx-8" />
                  </span>{" "}
                  than yesterday
                </p>
              </div>
              <div className="col-md-4 mg-t-20 mg-sm-t-0">
                <h5 className="tx-normal tx-rubik mg-b-10">186 +</h5>
                <div className="progress ht-3 mg-b-10">
                  <div
                    className="progress-bar wd-85p bg-danger"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <h6 className="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">
                  Unsolved Projects
                </h6>
                <p className="tx-10 mg-b-0 tx-gray-500">
                  <span className="tx-medium tx-danger">
                    -0.6% <i className="ti-arrow-down tx-8" />
                  </span>{" "}
                  than yesterday
                </p>
              </div>
              <div className="col-md-4 mg-t-20 mg-sm-t-0">
                <h5 className="tx-normal tx-rubik mg-b-10">227 +</h5>
                <div className="progress ht-3 mg-b-10">
                  <div
                    className="progress-bar wd-65p bg-success"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <h6 className="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">
                  Solved Projects
                </h6>
                <p className="tx-10 mg-b-0 tx-gray-500">
                  <span className="tx-medium tx-success">
                    0.3% <i className="ti-arrow-up tx-8" />
                  </span>{" "}
                  than yesterday
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
