import React, { useState, useEffect } from "react";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";
import { makeRequest } from "../../axios";

const AssignWriter = ({ order_id, order }) => {
  const [writers, setWriters] = useState([]);
  const { WisLoading, Werror, Wdata } = useQuery("orders", () =>
    makeRequest.get("/writers/getWriters").then((res) => {
      console.log("error", res.data);
      setWriters(res.data);
    })
  );
  console.log(Wdata);
  return (
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="ModalComponents">
            Assign Writer. Order ID : {order_id}
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
          <div className="row">
            <div className="col-sm-12">
              <p>
                Order ID : {order_id}, Title : {order.topic}, Price : $
                {order.price}
              </p>
            </div>
            <div className="col-sm-12">
              <div className="input-group">
                <select className="custom-select" id="inputGroupSelect04">
                  <option selected>Choose Writer...</option>
                  {Werror
                    ? "Something Went Wring"
                    : WisLoading
                    ? "Loading"
                    : writers.map((writer) => (
                        <option key={writer.id} value={writer.id}>
                          {writer.email}
                        </option>
                      ))}
                </select>
                <div className="input-group-append">
                  <button className="btn btn-outline-primary" type="button">
                    Assign Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignWriter;
