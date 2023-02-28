import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../../axios";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";

const SideMsg = ({ txt }) => {
  const [texts, setTexts] = useState([]);
  const [message, setMessage] = useState({
    order_id: 0,
    user: "writer",
    msg: "",
  });
  const { tisLoading, terrors, torderData } = useQuery("messages", () =>
    makeRequest.get("/messages/getMessages").then((res) => {
      console.log(res.data);
      setTexts(res.data);
    })
  );

  const handleChange = (e) => {
    setMessage((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(message);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (message.msg === "") {
      setErr("Message Required!");
    } else {
      try {
        const res = await makeRequest.post("/messages/clientMessage", message);
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

  return (
    <div className="row mg-t-20 mg-b-15">
      <div className="col-md-12">
        <div className="mg-b-20 bd-b">
          {/* {terrors
            ? "Something Went Wring"
            : tisLoading
            ? "Loading"
            : texts.map((text) => <Text text={text} key={text.id} />)} */}
        </div>
      </div>

      <div className="col-md-12 mg-t-15">
        <div
          id="demo-mail-textarea"
          className="mail-message-reply bg-trans-dark"
        >
          <p>
            <strong>Reply</strong> or <strong>Create</strong> this message...
          </p>
          <p>
            <div className="col-lg">
              <div className="form-group has-success mg-b-0">
                <textarea
                  rows={1}
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
  );
};

export default SideMsg;
