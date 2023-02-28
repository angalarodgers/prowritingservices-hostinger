import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../../axios";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";
import Text from "./Text";
const OrderMessaging = () => {
  const [texts, setTexts] = useState([]);
  const [message, setMessage] = useState({
    user: "client",
    msg: "",
  });
  const handleChange = (e) => {
    setMessage((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(message);
  };

  const { tisLoading, terrors, torderData } = useQuery("messages", () =>
    makeRequest.get("/messages/getAdminMessages").then((res) => {
      console.log(res.data);
      setTexts(res.data);
    })
  );
  return (
    <div className="card">
      <div className="card-body pt-2">
        <div className="row">
          <div className="col-sm-12">
            <span className="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2">
              Messages
            </span>
            <a href="#" className="card-title h5 d-block text-darker"></a>
          </div>
          <div className="col-sm-12">
            {terrors
              ? terrors
              : tisLoading
              ? "Loading"
              : texts.map((text) => <Text text={text} key={text.id} />)}
          </div>
          <div className="col-sm-12" style={{ display: "none" }}>
            {" "}
            <div className=" align-items-center">
              <i className="fa fa-comments"></i>
              <div className="form-group ps-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Type a message..."
                  defaultValue={""}
                  name="msg"
                  onChange={handleChange}
                  value={message.msg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default OrderMessaging;
