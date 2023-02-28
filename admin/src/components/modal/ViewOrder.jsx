import React from "react";
import OrderDetails from "./OrderDetails";

const ViewOrder = ({ order_id, order }) => {
  return (
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content ">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalCenterTitle">
            Order Details , ID : {order_id}, Price :{" "}
            <span style={{ color: "green" }}>${order.price}</span>
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <OrderDetails order={order} />
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-warning">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
