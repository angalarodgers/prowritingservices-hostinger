import React from "react";
import FormatDate from "../format-date/FormatDate";
import AssignWriter from "../modal/AssignWriter";
import ViewOrder from "../modal/ViewOrder";
import { createSearchParams, Link, useNavigate } from "react-router-dom";

const NewOrder = ({ order }) => {
  const navigate = useNavigate();
  const assignWriter = (e, order_id) => {
    e.preventDefault();

    navigate({
      pathname: "/assign-writer",
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
      <td>
        <FormatDate utcdate={order.createdAt} />
      </td>
      <td>{order.pages}</td>
      <td style={{ color: "green" }}>${order.price}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-outline-secondary"
            data-toggle="modal"
            data-target={`#exampleModalCenter${order.id}`}
          >
            View Order
          </button>
          <div
            className="modal fade"
            id={`exampleModalCenter${order.id}`}
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <ViewOrder order_id={order.id} order={order} />
          </div>

          <button
            type="button"
            className="btn btn-outline-success btn-xs"
            data-toggle="modal"
            data-target={`#ModalCenter${order.id}`}
          >
            Messages
          </button>
          <div
            className="modal fade"
            id={`ModalCenter${order.id}`}
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <ViewOrder order_id={order.id} order={order} />
          </div>

          <button
            type="button"
            onClick={(e) => assignWriter(e, order.id)}
            className="btn btn-outline-info btn-xs"
          >
            Assign
          </button>
        </div>
      </td>
    </tr>
  );
};

export default NewOrder;
