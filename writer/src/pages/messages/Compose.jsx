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
import MsgDate from "./MsgDate";
import Text from "./Text";

const Compose = () => {
  const [searchParam] = useSearchParams();
  const order_id = searchParam.get("id");
  const [message, setMessage] = useState({
    order_id: order_id,
    user: "writer",
    msg: "",
  });
  const [err, setErr] = useState("");
  const handleSend = async (e) => {
    e.preventDefault();
    if (message.msg === "") {
      setErr("Message Required!");
    } else {
      try {
        const res = await makeRequest.post("/messages/writerMessage", message);
        if (res.status === 200) {
          message.msg = "";
          setMessage(message);
          window.location.reload(false);
        }
      } catch (error) {
        setErr(error.response.data);
      }
    }
  };

  const [order, setOrders] = useState([]);
  const { isLoading, errors, orderData } = useQuery("orders", () =>
    makeRequest.get("/orders/getWriterOrder/" + order_id).then((res) => {
      setOrders(res.data);
    })
  );

  const [texts, setTexts] = useState([]);
  const { tisLoading, terrors, torderData } = useQuery("messages", () =>
    makeRequest.get("/messages/getOrderMessages/" + order_id).then((res) => {
      console.log(res.data);
      setTexts(res.data);
    })
  );

  const handleChange = (e) => {
    setMessage((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(message);
  };

  console.log(texts);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10">
          <h2 className="page-title">Compose A Message</h2>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-12">
          <div className="col-lg-12 email-right-sidebar">
            <div className="card bd-r-0-force bd-t-0-force bd-b-0-force">
              <div className="card-body">
                <div className="pd-y-15 mg-t-15 bd-b">
                  <div className="row">
                    <div className="col-md-6 toolbar-left">
                      {/*Sender Information*/}
                      <div className="d-flex">
                        <span className="mg-r-10">Order ID: </span>
                        <div className="text-left">
                          <div className="tx-semibold">{order_id}</div>
                          <span className="tx-12 tx-gray-500">
                            <h5>{order.topic}</h5>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 text-md-right hidden-xs">
                      {/*Details Information*/}
                      <p className="mg-0">
                        <small className="tx-gray-500">
                          <strong>Deadline: </strong>{" "}
                          <span>
                            <MsgDate utcdate={order.createdAt} />
                          </span>
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mg-t-20 mg-b-15">
                  <div className="col-md-12">
                    <div className="mg-b-20 bd-b">
                      {terrors
                        ? "Something Went Wring"
                        : tisLoading
                        ? "Loading"
                        : texts.map((text) => (
                            <Text text={text} key={order.id} />
                          ))}
                    </div>
                  </div>

                  <div className="col-md-12 mg-t-15">
                    <div
                      id="demo-mail-textarea"
                      className="mail-message-reply bg-trans-dark"
                    >
                      <p>
                        <strong>Reply</strong> or <strong>Create</strong> this
                        message...
                      </p>
                      <p>
                        <div className="col-lg">
                          <div className="form-group has-success mg-b-0">
                            <textarea
                              rows={3}
                              className="form-control is-valid mg-t-20"
                              placeholder="Type a Message"
                              name="msg"
                              onChange={handleChange}
                              defaultValue={""}
                            />
                          </div>
                          {/* form-group */}
                        </div>
                      </p>
                      <div className="col-lg d-flex justify-content-center">
                        <button
                          className="btn btn-custom-primary mg-t-20"
                          onClick={handleSend}
                        >
                          <i className="ti-location-arrow" /> Reply
                        </button>
                      </div>
                    </div>
                    {/* End View Message */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compose;
