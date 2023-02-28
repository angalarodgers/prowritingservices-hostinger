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
const OrderMessaging = ({ order_id }) => {
  const [texts, setTexts] = useState([]);
  const [message, setMessage] = useState({
    order_id: order_id,
    user: "client",
    msg: "",
  });
  const handleChange = (e) => {
    setMessage((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(message);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (message.msg.length === 0) {
      toast.error("Please Type in a message!");
    } else {
      try {
        const res = await makeRequest.post("/messages/writerMessage", message);
        console.log(res.data);
        if (res.status === 200) {
          toast.success("Message sent Successfully!");
          message.msg = "";
          setMessage(message);
          window.location.reload(false);
        }
      } catch (error) {
        toast.error(error);
      }
    }
  };

  const { tisLoading, terrors, torderData } = useQuery("messages", () =>
    makeRequest.get("/messages/getMessages/" + order_id).then((res) => {
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
              Order ID: {order_id}
            </span>
            <a href="#" className="card-title h5 d-block text-darker">
              Order Messages
            </a>
          </div>
          <div className="col-sm-12">
            {terrors
              ? terrors
              : tisLoading
              ? "Loading"
              : texts.map((text) => <Text text={text} key={text.id} />)}
          </div>
          <div className="col-sm-12">
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
          <div className="col-sm-12 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary btn-sm "
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default OrderMessaging;
