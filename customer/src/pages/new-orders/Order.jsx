import React, { useEffect, useContext, useState } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { makeRequest } from "../../axios";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { useQuery } from "react-query";
import AssignModal from "./AssignModal";
const Order = ({ order }) => {
  const handleAssign = (e, order_id) => {
    e.preventDefault();
    console.log(order_id);
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
  return (
    <div className="accordion-item mb-3">
      <h5 className="accordion-header order" id="headingOne">
        <button
          className="accordion-button border-bottom font-weight-bold collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapseOne${order.id}`}
          aria-expanded="false"
          aria-controls={`collapseOne${order.id}`}
        >
          <table className="table align-items-center mb-0">
            <tr>
              <td>
                <div className="d-flex flex-column justify-content-center">
                  <h6 className="mb-0 text-xs">{order.topic}</h6>
                  <p className="text-xs text-secondary mb-0">
                    {" "}
                    <small>ID:</small>
                    {order.id}
                  </p>
                </div>
              </td>
              <td>
                <div className="d-flex flex-column justify-content-center">
                  <h6 className="mb-0 text-xs">
                    {" "}
                    <small>Deadline:</small> {order.deadline}
                  </h6>
                </div>
              </td>
            </tr>
          </table>
          <i
            className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3"
            aria-hidden="true"
          />
          <i
            className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3"
            aria-hidden="true"
          />
        </button>
      </h5>
      <div
        id={`collapseOne${order.id}`}
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionRental"
        style={{ backgroundColor: "#F28322" }}
      >
        <div className="accordion-body text-sm opacity-8">
          <div className="row">
            <div className="col-sm-4">
              <table>
                <tbody>
                  <tr>
                    <div className="d-flex px-2 py-1">
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-xs">
                          {" "}
                          <small>Order ID:</small> {order.id}
                        </h6>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div className="d-flex px-2 py-1">
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-xs">
                          {" "}
                          <small>Topic:</small> {order.topic}
                        </h6>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div className="d-flex px-2 py-1">
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-xs">
                          {" "}
                          <small>Academic Level:</small> {order.academic_level}
                        </h6>
                      </div>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm-4">
              <table>
                <tbody>
                  <tr>
                    <div className="d-flex px-2 py-1">
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-xs">
                          {" "}
                          <small>Deadline:</small> {order.deadline}
                        </h6>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div className="d-flex px-2 py-1">
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-xs">
                          {" "}
                          <small>Pages/Words:</small> {order.pages}/
                          {order.words}
                        </h6>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <div className="d-flex px-2 py-1">
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-xs">
                          {" "}
                          <small>Price:</small> ${order.price}
                        </h6>
                      </div>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-6">
                  <button
                    className="btn btn-sm btn-outline-dark text-xs"
                    onClick={(e) => viewOrder(e, order.id)}
                  >
                    View
                  </button>
                </div>
                <div className="col-sm-6">
                  <button
                    className="btn btn-sm btn-outline-dark text-xs"
                    data-bs-toggle="modal"
                    data-bs-target={`#exampleModal${order.id}`}
                  >
                    Assign
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AssignModal
        order_id={order.id}
        topic={order.topic}
        price={order.price}
      />
    </div>
  );
};

export default Order;
