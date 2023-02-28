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
import TrMessage from "./TrMessage";
import SideMsg from "./SideMsg";

const Messages = () => {
  const [texts, setTexts] = useState([]);
  const [txt, setTxt] = useState({});
  const { tisLoading, terrors, torderData } = useQuery("messages", () =>
    makeRequest.get("/messages/getMessages").then((res) => {
      console.log(res.data);
      setTexts(res.data);
    })
  );

  const getThisMsg = (msg) => {};
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10">
          <h2 className="page-title">Messages</h2>
        </div>
        <div className="col-sm-2"></div>

        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-6">
              <table className="table table-hover">
                <tbody>
                  {terrors
                    ? "Something Went Wring"
                    : tisLoading
                    ? "Loading"
                    : texts.map((text) => (
                        <TrMessage
                          text={text}
                          getThisMsg={getThisMsg}
                          key={text.id}
                          setTxt={setTxt}
                        />
                      ))}
                </tbody>
              </table>
            </div>
            <div className="col-sm-6">{txt.msg}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
