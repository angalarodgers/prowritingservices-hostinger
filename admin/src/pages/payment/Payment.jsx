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
import Pay from "./Pay";

const Payment = () => {
  const navigate = useNavigate();
  const [orderNum, setOrderNum] = useState(0);
  const [payment, setPayment] = useState([]);
  const { pisLoading, perror, pdata } = useQuery("Payment", () =>
    makeRequest.get("/pay/getAllpay").then((res) => {
      setOrderNum(res.data.length);
      console.log(res.data);
      setPayment(res.data);
    })
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10">
          <h2 className="page-title">Payments</h2>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Payment ID</th>
                <th>Payer ID</th>
                <th>Payment Order</th>
                <th>Amount</th>
                <th>Made At</th>
                <th>Payer Paypal Id</th>
                <th>Facilitator Token</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {perror
                ? "Something Went Wring"
                : pisLoading
                ? "Loading"
                : payment.map((pay) => (
                    <Pay pay={pay} key={pay.id}>
                      {pay.id}
                    </Pay>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payment;
