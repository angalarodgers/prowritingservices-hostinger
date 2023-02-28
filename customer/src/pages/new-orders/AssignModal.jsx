import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const AssignModal = ({ order_id, topic, price }) => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const handleClickMe = async (e, order_id) => {
    console.log("clicked", order_id);
    try {
      const res = await makeRequest.post("/orders/assignAccount", {
        order_id: order_id,
        price: price,
      });
      console.log(res);
      if (res.status === 200) {
        window.location.reload(false);
        navigate("/orders");
      }
    } catch (error) {
      setErr(error.response.data);
      toast.error(error.response.data);
    }
  };
  return (
    <>
      <div
        className="modal fade"
        id={`exampleModal${order_id}`}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Assign Funds to this order
              </h5>
              <button
                type="button"
                className="btn-close text-dark"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{topic}</p>
              <p>Order ID: {order_id}</p>
              <h6>
                Price:
                <span style={{ color: "green" }}>${price}</span>
              </h6>
              <p style={{ color: "red" }}>
                {err && (
                  <div className="alert alert-warning" role="alert">
                    <strong>Warning!</strong> {err}
                  </div>
                )}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-gradient-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn bg-gradient-primary"
                onClick={(e) => handleClickMe(e, order_id)}
              >
                Assign Now
              </button>
            </div>
          </div>
        </div>
        <Toaster key={order_id} />
      </div>
    </>
  );
};

export default AssignModal;
