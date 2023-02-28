import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { makeRequest } from "../../axios";
import UploadWriterFiles from "../../components/modals/UploadWriterFiles";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const ViewOrder = () => {
  const [searchParam] = useSearchParams();
  const order_id = searchParam.get("id");
  const [error, setError] = useState("");
  const [dt, setDt] = useState({});
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  const [succ, setSucc] = useState("");
  const [wfiles, wsetFiles] = useState([]);

  const { isLoading, errors, orderData } = useQuery("orders", () =>
    makeRequest.get("/orders/getWriterOrder/" + order_id).then((res) => {
      setDt(res.data);
    })
  );

  const { fisLoading, ferrors, forderData } = useQuery("Clientfiles", () =>
    makeRequest.get("/orders/getOrderFiles/" + order_id).then((res) => {
      setFiles(res.data);
      return res.data;
    })
  );

  const { wfisLoading, wferrors, wforderData } = useQuery("Writerfiles", () =>
    makeRequest.get("/orders/getOrderWriterFiles/" + order_id).then((res) => {
      wsetFiles(res.data);
      return res.data;
    })
  );

  const handleAccept = async (e, order_id) => {
    e.preventDefault();
    if (!dt.id > 0) {
      setError("Error");
    } else {
      try {
        const res = await makeRequest.post("/orders/writerAcceptOrder", {
          orderId: dt.id,
        });
        toast.success("Order Accepted Successfully!");
        await sleep(3000);
        window.location.reload(false);
      } catch (error) {
        setError(error.response.data);
      }
    }
  };
  const handleDecline = async (e, order_id) => {
    e.preventDefault();
    if (!dt.id > 0) {
      setError("Error");
    } else {
      try {
        const res = await makeRequest.post("/orders/writerDeclineOrder", {
          orderId: dt.id,
        });
        if (res.status === 200) {
          setSucc("Order Declined Successfully");
        }
      } catch (error) {
        setError(error.response.data);
      }
    }
  };

  return (
    <div className="container" style={{ paddingTop: "10px" }}>
      <div className="row">
        <div className="col-sm-6">
          <h2 className="page-title">View Order : {order_id}</h2>
        </div>
        <div className="col-sm-6">
          {dt.writer_action === "" ? (
            <div className="btn-group" role="group" aria-label="Basic example">
              <a
                href="#"
                type="button"
                className="btn btn-success"
                onClick={(e) => handleAccept(e, dt.id)}
              >
                Accept Order
              </a>
              <button
                type="button"
                className="btn btn-danger"
                onClick={(e) => handleDecline(e, dt.id)}
              >
                Decline Order
              </button>
              <a
                href="dashboard"
                type="button"
                className="btn btn-outline-primary"
              >
                Go Back
              </a>
            </div>
          ) : dt.writer_action === "Declined" ? (
            <a href="dashboard">Go Back</a>
          ) : (
            <div className="btn-group" role="group" aria-label="Basic example">
              <a href="#" type="button" className="btn btn-info">
                New Messages <span className="badge badge-secondary">0</span>
              </a>
              <button
                type="button"
                className="btn btn-success"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                Upload Files
              </button>
              <a
                href="dashboard"
                type="button"
                className="btn btn-outline-primary"
              >
                Go Back
              </a>
            </div>
          )}
        </div>
        <div className="col-sm-12">
          <div className="row mt-20">
            <div className="col-sm-4 ">
              <h5>Basic Details</h5>
              <p>Order ID : {order_id}</p>
              <p>Writer ID : {dt.assigned_writer}</p>
              <p>Pages : {dt.pages}</p>
              <p>Words : {dt.words}</p>
              <p>Deadline : {dt.createdAt}</p>
              <p>Status : {dt.status}</p>
              <p>
                <strong style={{ color: "green" }}>Price: ${dt.price}</strong>
              </p>
            </div>
            <div className="col-sm-4">
              <h5>Order Info</h5>
              <span style={{ color: "red" }}>{error && error}</span>
              <span style={{ color: "green" }}>{succ && succ}</span>

              <p>Title : {dt.topic}</p>
              <p>Paper Type : {dt.paper_type}</p>
              <p>Discipline : {dt.discipline}</p>
              <p>Academic Level : {dt.academic_level}</p>
              <p>Spacing : {dt.spacing}</p>
              <p>Service : {dt.service}</p>
              <p>Style : {dt.style}</p>
            </div>
            <div className="col-sm-4">
              <h5>Order Files</h5>
              <span style={{ color: "red" }}>{error && error}</span>
              <span style={{ color: "green" }}>{succ && succ}</span>
              <p>
                <h6>Client Files</h6>
                {!wfiles
                  ? "Files Not Available"
                  : wfiles.map((wfile) => <tr key={wfile.id}>{wfile.file}</tr>)}
              </p>
              <p>
                <h6>Writer Files</h6>
                {!files
                  ? "Files Not Available"
                  : files.map((file) => (
                      <tr key={file.id}>
                        {file.type} : {file.file}
                      </tr>
                    ))}
              </p>
            </div>
            <div className="col-sm-12">
              <h6>Paper Instructions</h6>
              <p>{dt.paper_instructions}</p>
            </div>
            <div className="col-sm-12">
              <div>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg btn-block"
                >
                  View Messages{" "}
                  <span className="badge badge-secondary">0 New Messages</span>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success btn-lg btn-block"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                >
                  Upload Files
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success btn-lg btn-block"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                >
                  Mark As Complete
                </button>
                <div
                  className="modal fade bd-example-modal-lg"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <UploadWriterFiles order={dt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ViewOrder;
