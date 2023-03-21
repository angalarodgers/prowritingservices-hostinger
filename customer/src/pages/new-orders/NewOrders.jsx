import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { makeRequest } from "../../axios";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { useQuery } from "react-query";
import Order from "./Order";

const NewOrders = () => {
  const navigate = useNavigate;
  const [orderNum, setOrderNum] = useState(0);

  const { isLoading, error, data } = useQuery("orders", () =>
    makeRequest.get("/orders/getClientNewOrders").then((res) => {
      setOrderNum(res.data.length);
      return res.data;
    })
  );
  return (
    <div className="accordion-1 py-5 mt-5">
      <div className="container">
        <div className="row ">
          <div className="col-sm-4">
            <h6 style={{ color: "#F27329" }}>New Orders</h6>
          </div>
          <div className="col-sm-8 mb-1">
            <div className="nav-wrapper position-relative end-0">
              <ul className="nav nav-pills nav-fill p-1" role="tablist">
                <li
                  className="nav-item"
                  style={{ backgroundColor: "orange", borderRadius: "4px" }}
                >
                  <a
                    className="nav-link mb-0 px-0 py-1 active"
                    href="/new-orders"
                  >
                    New Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link mb-0 px-0 py-1 active"
                    href="/orders-in-progress"
                  >
                    Orders Inprogress
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link mb-0 px-0 py-1 active"
                    href="/completed-orders"
                  >
                    Orders Completed
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link mb-0 px-0 py-1"
                    href="/canceled-orders"
                  >
                    Orders Canceled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row card">
          <div className="col-md-10 mx-auto ">
            <div className="accordion" id="accordionRental">
              <hr />
              {error
                ? "Something Went Wring"
                : isLoading
                ? "Loading"
                : data.map((order) => <Order order={order} key={order.id} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrders;
