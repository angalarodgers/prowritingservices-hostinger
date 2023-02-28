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
          <h2 style={{ color: "#F27329" }}>New Orders</h2>
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
