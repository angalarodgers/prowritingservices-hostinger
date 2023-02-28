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
import Writer from "./Writer";

const ListWriters = () => {
  const navigate = useNavigate();
  const [orderNum, setOrderNum] = useState(0);
  const [writers, setWriters] = useState([]);
  const { isLoading, error, data } = useQuery("Writers", () =>
    makeRequest.get("/writers/getWriters").then((res) => {
      setOrderNum(res.data.length);
      console.log(res.data);
      setWriters(res.data);
    })
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10">
          <h2 className="page-title">Writers</h2>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Writer ID</th>
                <th>Email</th>
                <th>Registration Date</th>
              </tr>
            </thead>
            <tbody>
              {error
                ? "Something Went Wring"
                : isLoading
                ? "Loading"
                : writers.map((writer) => (
                    <Writer writer={writer} key={writer.id} />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListWriters;
