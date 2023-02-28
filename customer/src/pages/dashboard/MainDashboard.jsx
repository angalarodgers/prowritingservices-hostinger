import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../../axios";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";
import TableOrdersInprogress from "../../components/TableOrdersInprogress";
import DashFooter from "../../constants/dash-footer/DashFooter";

const MainDashboard = () => {
  const [mybalance, setMyBalance] = useState(0);
  const [orderNum, setOrderNum] = useState(0);
  const [countwriters, setCountWriters] = useState(0);
  const [completedOrders, setCompletedOrders] = useState(0);

  const { balisLoading, balerror, baldata } = useQuery("getbalance", () =>
    makeRequest.get("/pay/getbalance").then((res) => {
      console.log(res.data);
      setMyBalance(res.data.balance);
      return res.data;
    })
  );

  const { isLoading, error, data } = useQuery("ActiveOrders", () =>
    makeRequest.get("/orders/getClientActiveOrders").then((res) => {
      setOrderNum(res.data.length);
      return res.data;
    })
  );

  const { wisLoading, werror, wdata } = useQuery("writers", () =>
    makeRequest.get("/writers/getWriters").then((res) => {
      setCountWriters(res.data.length);
      return res.data;
    })
  );

  const { cisLoading, cerror, cdata } = useQuery("CompletedOrders", () =>
    makeRequest.get("/orders/getClientCompletedOrders").then((res) => {
      setCompletedOrders(res.data.length);
      return res.data;
    })
  );

  return (
    <div className="container py-4 mt-6">
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">
                      My Balance
                    </p>
                    <h5 className="font-weight-bolder mb-0">${mybalance}</h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i
                      className="ni ni-money-coins text-lg opacity-10"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">
                      Current Orders
                    </p>
                    <h5 className="font-weight-bolder mb-0">{orderNum}</h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i
                      className="ni ni-world text-lg opacity-10"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">
                      Writers
                    </p>
                    <h5 className="font-weight-bolder mb-0">{countwriters}</h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i
                      className="ni ni-paper-diploma text-lg opacity-10"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">
                      Finished Orders
                    </p>
                    <h5 className="font-weight-bolder mb-0">
                      {completedOrders}
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i
                      className="ni ni-cart text-lg opacity-10"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
          <TableOrdersInprogress />
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card h-100">
            <div className="card-header pb-0">
              <h6>Account overview</h6>
              <p className="text-sm">
                <i className="fa fa-arrow-up text-success" aria-hidden="true" />
                <span className="font-weight-bold">0%</span> this month
              </p>
            </div>
            {/* <div className="card-body p-3">
              <div className="timeline timeline-one-side">
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="ni ni-bell-55 text-success text-gradient" />
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">
                      $2400, Design changes
                    </h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                      22 DEC 7:20 PM
                    </p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="ni ni-html5 text-danger text-gradient" />
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">
                      New order #1832412
                    </h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                      21 DEC 11 PM
                    </p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="ni ni-cart text-info text-gradient" />
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">
                      Server payments for April
                    </h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                      21 DEC 9:34 PM
                    </p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="ni ni-credit-card text-warning text-gradient" />
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">
                      New card added for order #4395133
                    </h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                      20 DEC 2:20 AM
                    </p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="ni ni-key-25 text-primary text-gradient" />
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">
                      Unlock packages for development
                    </h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                      18 DEC 4:54 AM
                    </p>
                  </div>
                </div>
                <div className="timeline-block">
                  <span className="timeline-step">
                    <i className="ni ni-money-coins text-dark text-gradient" />
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">
                      New order #9583120
                    </h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                      17 DEC
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
