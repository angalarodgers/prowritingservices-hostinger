import React, { useState } from "react";
import "./NewOrders.scss";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../../axios";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";
import Ord from "./Ord";
const NewOrders = () => {
  const navigate = useNavigate();
  const [orderNum, setOrderNum] = useState(0);
  const { isLoading, error, data } = useQuery("NewOrders", () =>
    makeRequest.get("/orders/getClientActiveOrdersAssigned").then((res) => {
      setOrderNum(res.data.length);
      return res.data;
    })
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10">
          <h2 className="page-title">
            My Orders <span className="badge badge-secondary">0</span>
          </h2>
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
                <th>Amount / Page</th>

                <th>Mark As Completed</th>
              </tr>
            </thead>
            <tbody>
              {error
                ? "Something Went Wring"
                : isLoading
                ? "Loading"
                : data.map((order) => <Ord order={order} key={order.id} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewOrders;
