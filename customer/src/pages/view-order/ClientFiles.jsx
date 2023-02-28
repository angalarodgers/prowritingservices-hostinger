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

const ClientFiles = ({ order_id }) => {
  const [c, setC] = useState([]);
  const { isLoading, error, data } = useQuery("ordersFiles", () =>
    makeRequest.get("/orders/getFiles/" + order_id).then((res) => {
      setC(res.data);
      console.log(res.data);
      return res.data;
    })
  );
  return (
    <>
      {error ? (
        <span style={{ color: "red" }}>error</span>
      ) : isLoading ? (
        "Loading"
      ) : (
        c.map((file) =>
          file.type.length === 0 ? (
            <span className="mb-2 text-xs">
              <span className="text-dark ms-sm-2 font-weight-bold">
                {file.file}
              </span>
            </span>
          ) : (
            <span></span>
          )
        )
      )}
    </>
  );
};

export default ClientFiles;
