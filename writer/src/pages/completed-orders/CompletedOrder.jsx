import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
const CompletedOrder = ({ order }) => {
  const navigate = useNavigate();
  const viewMsg = (e, order_id) => {
    e.preventDefault();
    navigate({
      pathname: "/compose-messages",
      search: createSearchParams({
        id: order_id,
      }).toString(),
    });
  };
  return (
    <tr>
      <td>{order.id}</td>
      <td> {order.topic}</td>
      <td>{order.discipline}</td>
      <td>{order.createdAt}</td>
      <td>{order.pages}</td>
      <td style={{ color: "green" }}>${order.price}</td>
      <td style={{ color: "green" }}>
        <div
          className="progress mg-t-10 tooltip-info"
          style={{ height: 5, cursor: "pointer" }}
          data-placement="top"
          title="50%"
        >
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "50%" }}
            aria-valuenow={50}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            onClick={(e) => viewMsg(e, order.id)}
            type="button"
            className="btn btn-outline-info"
          >
            View Msg <span className="w3-badge w3-red">8</span>
          </button>

          <button
            onClick={(e) => handleDecline(e, order.id)}
            type="button"
            className="btn btn-danger"
          >
            Decline
          </button>
        </div>
      </td>
      <ToastContainer />
    </tr>
  );
};

export default CompletedOrder;
