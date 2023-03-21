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
const ContactSupport = () => {
  const [texts, setTexts] = useState([]);
  const [message, setMessage] = useState({
    subject: "",
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
        const res = await makeRequest.post(
          "/messages/writerMessageToSupport",
          message
        );
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
    makeRequest.get("/messages/getMessagesToSupport").then((res) => {
      console.log(res.data);
      setTexts(res.data);
    })
  );

  return (
    <div className="accordion-1 mt-7">
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6 mx-auto ">
            <h6 style={{ color: "#F27127" }}>Send us a message</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <div className="accordion" id="accordionRental">
                  {terrors
                    ? terrors
                    : tisLoading
                    ? "Loading"
                    : texts.map((text) => <Text text={text} key={text.id} />)}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 ">
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6 bg-white rounded-1">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Type your subject"
                        onChange={handleChange}
                        value={message.subject}
                      />
                    </div>
                  </div>
                </div>
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
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ContactSupport;
