import React, { useState } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { makeRequest } from "../../axios";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { useQuery } from "react-query";
import { useEffect } from "react";
import ClientFiles from "./ClientFiles";
import WriterFiles from "./WriterFiles";

const OrderDetails = ({ order_id }) => {
  const navigate = useNavigate();
  const [order, setOrder] = useState({});
  const { bbalisLoading, bbalerror, bbaldata } = useQuery("getThisOrder", () =>
    makeRequest.get("/orders/getThisOrder/" + order_id).then((res) => {
      setOrder(res.data);
      console.log(res.data);
      return res.data;
    })
  );

  const uploadFiles = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/upload-file",
      search: createSearchParams({
        id: order_id,
      }).toString(),
    });
  };
  return (
    <div className="card">
      <div className="card-header pb-0 px-3">
        <h6 className="mb-0">Order Details</h6>
      </div>
      <div className="card-body ">
        <ul className="list-group">
          <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
            <div className="d-flex flex-column">
              <h6 className="mb-3 text-sm">{order.topic}</h6>
              <span className="mb-2 text-xs">
                Order ID:{" "}
                <span className="text-dark font-weight-bold ms-sm-2">
                  {order.id}
                </span>
              </span>
              <span className="mb-2 text-xs">
                Academic Level:{" "}
                <span className="text-dark ms-sm-2 font-weight-bold">
                  {order.academic_level}
                </span>
              </span>
              <span className="mb-2 text-xs">
                Deadline:{" "}
                <span className="text-dark ms-sm-2 font-weight-bold">
                  {order.deadline}
                </span>
              </span>
              <span className="mb-2 text-xs">
                Paper Type:{" "}
                <span className="text-dark ms-sm-2 font-weight-bold">
                  {order.paper_type}
                </span>
              </span>
              <span className="mb-2 text-xs">
                Pages:{" "}
                <span className="text-dark ms-sm-2 font-weight-bold">
                  {order.pages}
                </span>
              </span>
              <span className="mb-2 text-xs">
                Words:{" "}
                <span className="text-dark ms-sm-2 font-weight-bold">
                  {order.words}
                </span>
              </span>
              <span className="mb-2 text-xs">
                Words:{" "}
                <span
                  className=" ms-sm-2 font-weight-bold"
                  style={{ color: "green" }}
                >
                  $ {order.price}
                </span>
              </span>
              <span className="mb-2 text-xs">
                Writer:{" "}
                <span className="text-dark ms-sm-2 font-weight-bold">
                  {order.assigned_writer}
                </span>
              </span>
              <span className="mb-2 text-xs">
                Order Status:{" "}
                <span className="text-dark ms-sm-2 font-weight-bold">
                  {order.status}
                </span>
              </span>
              <span className="mb-2 text-xs">
                Paper Instructions:{" "}
                <span className="text-dark ms-sm-2 font-weight-bold">
                  {order.paper_instructions}
                </span>
              </span>
              <h6 className="mb-3 text-sm">My Uploaded Files</h6>
              <ClientFiles order_id={order_id} />
              <h6 className="mb-3 text-sm">Writer Uploaded Files</h6>
              <WriterFiles order_id={order_id} />
            </div>
            <div className="ms-auto text-end">
              <a
                className="btn btn-outline-dark  px-3 mb-0"
                href="#"
                onClick={uploadFiles}
              >
                <i className="far fa-file-alt me-2" />
                Upload File
              </a>
              <a className="btn btn-link text-dark px-3 mb-0" href="#">
                <i
                  className="fas fa-pencil-alt text-dark me-2"
                  aria-hidden="true"
                />
                Edit
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderDetails;
