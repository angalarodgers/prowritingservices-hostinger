import React, { useState, useEffect } from "react";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { makeRequest } from "../../axios";
import Option from "./Option";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AssignWriter = () => {
  const [searchParam] = useSearchParams();
  const order_id = searchParam.get("id");
  const [we, setWr] = useState({});
  const [writers, setWriters] = useState([]);
  const [error, setError] = useState("");
  const [input, setInput] = useState(0);
  const [succ, setSucc] = useState("");
  const { WisLoading, Werror, Wdata } = useQuery("orders", () =>
    makeRequest.get("/writers/getWriters").then((res) => {
      setWriters(res.data);
    })
  );

  const selectWriter = (e) => {
    const writerId = e.target.value;
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(input);
    if (writerId > 0) {
      const Found = writers.find((obj) => {
        return obj.id == writerId;
      });

      setWr(Found);
      setError("");
    } else {
      setError("Please Select a writer");
      setWr({});
    }
  };
  const navigate = useNavigate();
  const handleAssign = async (e) => {
    e.preventDefault();

    if (input === 0) {
      setError("Writer Not Selected");
      setWr({});
    } else {
      try {
        const res = await makeRequest.post(
          "http://localhost:8880/api/orders/assignWriter",
          { writer: we, orderId: order_id }
        );

        console.log(res.data);
        setSucc(res.data);
        await delay(2000);
        navigate("/dashboard");
      } catch (err) {
        setError(err.response);
      }
    }
  };
  return (
    <div className="container" style={{ paddingTop: "10px" }}>
      <div className="row">
        <div className="col-sm-10">
          <h2 className="page-title">Assgin Writer</h2>
        </div>
        <div className="col-sm-2">
          <Link to="../dashboard">
            <button type="button" class="btn btn-outline-primary">
              Go Back
            </button>
          </Link>
        </div>
        <div className="col-sm-12">
          <div className="row mt-20">
            <div className="col-sm-3 ">
              <p>Order ID : {order_id}</p>
              <p>Title : My Title</p>
            </div>
            <div className="col-sm-5">
              <span style={{ color: "red" }}>{error && error}</span>
              <span style={{ color: "green" }}>{succ && succ}</span>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Select Writer</label>
                <select
                  multiple
                  className="form-control"
                  id="exampleFormControlSelect2"
                  onChange={selectWriter}
                >
                  {Werror
                    ? "Something Went Wring"
                    : WisLoading
                    ? "Loading"
                    : writers.map((writer) => (
                        <Option writer={writer} key={writer.id} />
                      ))}
                </select>
              </div>
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAssign}
                >
                  Assign
                </button>
              </div>
            </div>
            <div className="col-sm-4">
              <p>Writer ID : {we.id}</p>
              <p>Name : {we.name}</p>
              <p>Email : {we.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignWriter;
