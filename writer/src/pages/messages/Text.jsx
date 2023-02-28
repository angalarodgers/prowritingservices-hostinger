import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import MsgDate from "./MsgDate";
import "./style.scss";

const Text = ({ text }) => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      {text.user_id !== currentUser.id ? (
        <p>
          <div>
            <div className="row">
              <div className="col-sm-2">
                <a className="tx-16 tx-semibold" href="#">
                  <small className="tx-gray-500">
                    Client ID : {text.user_id}
                  </small>
                </a>
                <br />
                <a href className="tx-primary ">
                  <small className="tx-gray-500">
                    <MsgDate utcdate={text.createdAt} />
                  </small>
                </a>
              </div>
              <div className="col-sm-10">
                <p className="mt-2 tx-gray-700 from">{text.msg}</p>
              </div>
            </div>

            <hr />
          </div>
        </p>
      ) : (
        <p>
          <div>
            <div className="row">
              <div className="col-sm-10">
                <p className="mt-2 tx-gray-700 to">{text.msg}</p>
              </div>
              <div className="col-sm-2">
                <a className="tx-16 tx-semibold" href="#">
                  <small className="tx-gray-500"> Me</small>
                </a>
                <br />
                <a href className="tx-primary">
                  <small className="tx-gray-500">
                    <MsgDate utcdate={text.createdAt} />
                  </small>
                </a>
              </div>
            </div>

            <hr />
          </div>
        </p>
      )}
    </div>
  );
};

export default Text;
