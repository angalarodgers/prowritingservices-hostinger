import React, { useState } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { makeRequest } from "../../axios";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { useQuery } from "react-query";
import toast, { Toaster } from "react-hot-toast";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const UploadFiles = () => {
  const [searchParam] = useSearchParams();
  const order_id = searchParam.get("id");
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [count, setCount] = useState(0);

  const upload = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (error) {
      toast.error(error);
    }
  };

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Mutations
  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/orders/uploadFile", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("orders/uploadFile");
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    let fileUrl = "";
    if (file) {
      fileUrl = await upload(e);
      mutation.mutate({ order_id: order_id, file: fileUrl });
      setFile(null);
      toast.success("File Uploaded Successfully");
      await sleep(1000);
      window.location.reload(false);
    } else {
      setErrors("File not selected");
    }
  };

  const handleFinish = (e) => {
    e.preventDefault();
    navigate("/new-orders");
  };

  const { isLoading, error, data } = useQuery("ordersFiles", () =>
    makeRequest.get("/orders/getFiles/" + order_id).then((res) => {
      setFiles(res.data);
      setCount(res.data.length);
      return res.data;
    })
  );
  return (
    <div className="container py-4 mt-6">
      <div className="row ">
        <h2 style={{ color: "#F27329" }}>Upload Files</h2>
      </div>
      <div className="row">
        <div className="col-md-12 mb-lg-0 mb-4">
          <div className="card ">
            <div className="card-header pb-0">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <h6 className="mb-0">Order ID : {order_id}</h6>
                </div>
              </div>
            </div>
            <div className="card-body p-3">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className="card card-body border card-plain border-radius-lg ">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">
                        {count} File(s) Uploaded
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="exampleFormControlInput1"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </div>

                    <div className="form-group col-sm-12 text-center">
                      {error ? (
                        <span style={{ color: "red" }}></span>
                      ) : isLoading ? (
                        "Loading"
                      ) : (
                        files.map((file) => (
                          <ul className="list-group wd-300">
                            <li className="list-group-item" key={file.id}>
                              {file.id}-{file.file}
                            </li>
                          </ul>
                        ))
                      )}
                    </div>

                    <div className="form-group d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        onClick={handleSubmit}
                      >
                        Upload file
                      </button>
                    </div>

                    <div className="form-group d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-info btn-lg"
                        onClick={handleFinish}
                      >
                        Confirm & Place Order
                      </button>
                    </div>
                  </div>
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

export default UploadFiles;
