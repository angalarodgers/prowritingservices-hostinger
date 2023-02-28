import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { makeRequest } from "../../axios";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { useQuery } from "react-query";
import Transaction from "./Transaction";

const Transactions = () => {
  const navigate = useNavigate();
  const [bal, setBal] = useState(0);

  const { bbalisLoading, bbalerror, bbaldata } = useQuery("getbalance", () =>
    makeRequest.get("/pay/getbalance").then((res) => {
      setBal(res.data.balance);
      return res.data;
    })
  );

  const { isLoading, error, data } = useQuery("orders", () =>
    makeRequest.get("/pay/getpay").then((res) => {
      return res.data;
    })
  );
  return (
    <div className="card-body pt-4 p-3">
      <h6 className="text-uppercase text-body text-xs font-weight-bolder mb-3">
        Newest
      </h6>
      <ul className="list-group">
        {error
          ? "Something Went Wring"
          : isLoading
          ? "Loading"
          : data.map((bal) => <Transaction bal={bal} key={bal.id} />)}
      </ul>
    </div>
  );
};

export default Transactions;
