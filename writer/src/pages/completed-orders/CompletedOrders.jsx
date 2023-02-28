import React from "react";
import CompletedOrder from "./CompletedOrder";
import { makeRequest } from "../../axios";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";
import { useState } from "react";

const CompletedOrders = () => {
  const [completedOrders, setCompletedOrders] = useState([]);
  const { isLoading, error, data } = useQuery("WriterCompletedOrders", () =>
    makeRequest.get("/orders/getWriterCompletedOrders").then((res) => {
      setCompletedOrders(res.data);
    })
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10">
          <h2 className="page-title">
            Completed <span className="badge badge-secondary">0</span>
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
                <th>Amount</th>
                <th>Action</th>
                <th>Mark As Completed</th>
              </tr>
            </thead>
            <tbody>
              {error
                ? "Something Went Wring"
                : isLoading
                ? "Loading"
                : completedOrders.map((order) => (
                    <CompletedOrder order={order} key={order.id} />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompletedOrders;
