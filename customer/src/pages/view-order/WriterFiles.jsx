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

const WriterFiles = ({ order_id }) => {
  const [w, setW] = useState([]);
  const { wisLoading, werror, wdata } = useQuery("WriterFiles", () =>
    makeRequest.get("/orders/getFiles/" + order_id).then((res) => {
      setW(res.data);
      return res.data;
    })
  );
  return (
    <>
      {werror ? (
        <span style={{ color: "red" }}>{werror}</span>
      ) : wisLoading ? (
        "Loading"
      ) : (
        w.map((wfile) =>
          wfile.type.length !== 0 ? (
            <span className="mb-2 text-xs">
              <span className="text-dark ms-sm-2 font-weight-bold">
                {wfile.file} --|-- {wfile.type}
              </span>
            </span>
          ) : (
            <div></div>
          )
        )
      )}
    </>
  );
};

export default WriterFiles;
