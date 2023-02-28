import React, { useState, useEffect } from "react";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";
import { makeRequest } from "../../axios";
import { useNavigate } from "react-router-dom";
import NewOrder from "./NewOrder";
const NewOrders = () => {
  const navigate = useNavigate();
  const [orderNum, setOrderNum] = useState(0);
  const [orders, setOrders] = useState([]);
  const { isLoading, error, data } = useQuery("Neworders", () =>
    makeRequest.get("/orders/getAdminNewOrders").then((res) => {
      setOrderNum(res.data.length);
      console.log(res.data);
      setOrders(res.data);
    })
  );

  const checkError = () => {
    if (error) {
      navigate("/login");
    }
  };
  checkError();
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10">
          <h2 className="page-title">Orders</h2>
        </div>
        <div className="col-sm-2">
          <button type="button" class="btn btn-outline-primary">
            View Bids
          </button>
        </div>
        <div className="col-sm-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Title</th>
                <th>Discipline</th>
                <th>Deadline</th>
                <th>Pages</th>
                <th>Progress</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {error
                ? "Something Went Wring"
                : isLoading
                ? "Loading"
                : orders.map((order) => (
                    <NewOrder order={order} key={order.id} />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewOrders;
