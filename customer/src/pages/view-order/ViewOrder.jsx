import React, { useState } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { makeRequest } from "../../axios";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { useQuery } from "react-query";
import OrderDetails from "./OrderDetails";
import OrderMessaging from "./OrderMessaging";

const ViewOrder = () => {
  const [searchParam] = useSearchParams();
  const order_id = searchParam.get("id");
  return (
    <div className="accordion-1 py-5 mt-5">
      <div className="container">
        <div className="row ">
          <h2 style={{ color: "#F27329" }}>Order ID: {order_id}</h2>
        </div>
        <div className="row card">
          <div className="col-md-12 mx-auto ">
            <div className="accordion" id="accordionRental">
              <div className="row">
                <div className="col-sm-7">
                  <OrderDetails order_id={order_id} />
                </div>
                <div className="col-sm-5">
                  <OrderMessaging order_id={order_id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
