import React, { useState, useEffect } from "react";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";
import { makeRequest } from "../../axios";
import ActiveOrder from "./table/ActiveOrder";
import CanceledOrder from "./table/CanceledOrder";

const CanceledOrders = () => {
  const [corders, setcOrders] = useState([]);
  const { cisLoading, cerror, cdata } = useQuery("CanceledOrders", () =>
    makeRequest.get("/orders/getAdminCanceledOrders").then((res) => {
      console.log(res.data);
      setcOrders(res.data);
    })
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10">
          <h2 className="page-title">Canceled Orders</h2>
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
              {cerror
                ? "Something Went Wring"
                : cisLoading
                ? "Loading"
                : corders.map((order) => (
                    <CanceledOrder order={order} key={order.id} />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CanceledOrders;
