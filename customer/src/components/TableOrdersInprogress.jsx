import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { makeRequest } from "../axios";

import { useQuery } from "react-query";
import OrderInprogress from "./OrderInprogress";

const TableOrdersInprogress = () => {
  const navigate = useNavigate;
  const [orderNum, setOrderNum] = useState();
  const { isLoading, error, data } = useQuery("orders", () =>
    makeRequest.get("/orders/getClientActiveOrders").then((res) => {
      setOrderNum(res.data.length);
      return res.data;
    })
  );
  return (
    <div className="card">
      <div className="card-header pb-0">
        <div className="row">
          <div className="col-lg-6 col-7">
            <h6>Orders Inprogress</h6>
          </div>
          <div className="col-lg-6 col-5 my-auto text-end">
            <div className="dropdown float-lg-end pe-4">
              <a
                className="cursor-pointer"
                id="dropdownTable"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-ellipsis-v text-secondary" />
              </a>
              <ul
                className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                aria-labelledby="dropdownTable"
              >
                <li>
                  <a className="dropdown-item border-radius-md" href="#">
                    New Orders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-radius-md" href="#">
                    Active Orders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-radius-md" href="#">
                    Urgent Orders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-radius-md" href="#">
                    Delayed Orders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-radius-md" href="#">
                    Completed Orders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-radius-md" href="#">
                    Canceled Orders
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body px-0 pb-2">
        <div className="table-responsive">
          <table className="table align-items-center mb-0">
            <thead>
              <tr>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Order ID
                </th>

                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                  Title
                </th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Budget
                </th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Deadline
                </th>
                {/* <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Progress
                </th> */}
              </tr>
            </thead>
            <tbody>
              {error
                ? "Something Went Wring"
                : isLoading
                ? "Loading"
                : data.map((order) => (
                    <OrderInprogress order={order} key={order.id} />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableOrdersInprogress;
