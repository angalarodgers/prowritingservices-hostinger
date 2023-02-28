import React, { useState } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { makeRequest } from "../../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const Ord = ({ order }) => {
  const [status, setStatus] = useState("In Progress");
  const [succ, setSucc] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setStatus("Completed");
  };
  const navigate = useNavigate();
  const viewOrder = (e, order_id) => {
    e.preventDefault();
    navigate({
      pathname: "/view-order",
      search: createSearchParams({
        id: order_id,
      }).toString(),
    });
  };
  const handleAccept = async (e, order_id) => {
    e.preventDefault();
    if (!order.id > 0) {
      setError("Error");
    } else {
      try {
        const res = await makeRequest.post("/orders/writerAcceptOrder", {
          orderId: order.id,
        });
      } catch (error) {
        setError(error.response.data);
      }
    }
  };
  const handleDecline = async (e, order_id) => {
    e.preventDefault();
    if (!order.id > 0) {
      setError("Error");
    } else {
      try {
        const res = await makeRequest.post("/orders/writerDeclineOrder", {
          orderId: order.id,
        });
        console.log(res.data);
        if (res.status === 200) {
          setSucc("");
          toast.success("Order Declined Successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          await delay(2000);
          window.location.reload(false);
        }
      } catch (error) {
        setError(error.response.data);
      }
    }
  };
  return (
    <tr>
      <td>{order.id}</td>
      <td> {order.topic}</td>
      <td>{order.discipline}</td>
      <td>{order.createdAt}</td>
      <td>{order.pages}</td>
      <td style={{ color: "green" }}>KSH.{250}</td>

      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            onClick={(e) => viewOrder(e, order.id)}
            type="button"
            className="btn btn-outline-info"
          >
            View <span className="w3-badge w3-red"></span>
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

export default Ord;
