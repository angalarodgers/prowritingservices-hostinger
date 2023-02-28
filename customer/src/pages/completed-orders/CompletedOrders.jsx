import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { makeRequest } from "../../axios";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { useQuery } from "react-query";
import { useEffect } from "react";
import Order from "./Order";

const CompletedOrders = () => {
  const { isLoading, error, data } = useQuery("orders", () =>
    makeRequest.get("/orders/getClientCompletedOrders").then((res) => {
      return res.data;
    })
  );
  return (
    <div className="accordion-1 py-5 mt-5">
      <div className="container">
        <div className="row ">
          <h2 style={{ color: "#F27329" }}>Completed Orders</h2>
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

export default CompletedOrders;
