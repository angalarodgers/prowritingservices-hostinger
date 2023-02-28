import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { makeRequest } from "../../axios";
import toast, { Toaster } from "react-hot-toast";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import {
  useQuery,
  // useMutation,
  // useQueryClient,
  // QueryClient,
  // QueryClientProvider,
} from "react-query";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const UploadWriterFiles = ({ order }) => {
  const [files, setFiles] = useState(null);
  const [err, setErr] = useState("");
  const [fileType, setFileType] = useState({ type: "" });
  const [succ, setSucc] = useState("");

  const handleChange = (e) => {
    setFileType((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(fileType);
  };

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const upload = async (e) => {
    e.preventDefault();
    if (files === null) {
      setErr("No File Selected");
    } else {
      try {
        const formData = new FormData();
        formData.append("file", files);
        const res = await makeRequest.post("/upload", formData);
        setErr("");
        return res.data;
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Mutations
  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/orders/uploadWriterFile", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("orders/uploadWriterFile");
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    let fileUrl = "";
    if (files) {
      fileUrl = await upload(e);
      mutation.mutate({
        order_id: order.id,
        file: fileUrl,
        type: fileType.type,
      });
      setFiles(null);
      toast.success("File Uploaded Successfully");

      setErr("");
    } else {
      toast.error("File not selected");
    }
  };

  const markAsComplete = async (e) => {
    e.preventDefault();
    try {
      const res = await makeRequest.post("/orders/markAsCompleted", {
        orderId: order.id,
        price: 250,
      });
      if (res.status === 200) {
        console.log(res.data);
        toast.success("Order Successdfully Marked As Completed!");
      }
    } catch (error) {
      toast.error(err.response.data);
    }
  };
  return (
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalCenterTitle">
            Upload Files : {order.id}, Title: {order.topic}
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
              <span style={{ color: "green" }}>{succ && succ}</span>
              {files ? "There are no uploaded files" : <tr>{files}</tr>}
              <span style={{ color: "red" }}>{err && err}</span>
            </div>
            <div className="col-sm-12">
              <div className="input-group">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile04"
                    onChange={(e) => setFiles(e.target.files[0])}
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile04"
                  >
                    Choose file
                  </label>
                </div>
              </div>
            </div>
            <br />
            <div className="col-sm-12">
              <br />
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect01"
                  >
                    Options
                  </label>
                </div>
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  name="type"
                  onChange={handleChange}
                >
                  <option selected>Choose Type...</option>
                  <option value={"Product"}>Product</option>
                  <option value={"Sample"}>Sample</option>
                  <option value={"Draft"}>Draft</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Upload File
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={markAsComplete}
          >
            Mark As Complete
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default UploadWriterFiles;
