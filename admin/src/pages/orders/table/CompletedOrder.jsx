import React, { useState, useEffect } from "react";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";
import { makeRequest } from "../../../axios";
import FormatDate from "../../../components/format-date/FormatDate";
import ViewOrder from "../../../components/modal/ViewOrder";

const CompletedOrder = ({ order }) => {
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
        </div>
      </td>
    </tr>
  );
};

export default CompletedOrder;
