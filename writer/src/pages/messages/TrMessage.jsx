import React from "react";

const TrMessage = ({ text, setTxt }) => {
  const h = (e, textId) => {
    e.preventDefault();
    setTxt(textId);
  };
  return (
    <div>
      <tr className="active">
        <td className="wd-5p">
          <div className="mg-l-15 d-flex custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1" />
          </div>
        </td>
        <td className="wd-5p">
          <a href>
            <i data-feather="star" className="wd-16" />
          </a>
        </td>
        <td className="wd-15p">Client {text.user_id} </td>
        <td>
          <a href="mailbox-message.html">
            <span className="badge badge-outline-warning mr-2">Support</span>
            <span> {text.type}</span>
          </a>
        </td>
        <td className="wd-15p">
          <p className="mb-0 tx-10 tx-gray-500">01-02-2019, 11:46AM</p>
        </td>
        <td>
          <button
            className="btn btn-outline-primary"
            onClick={(e) => h(e, text)}
          >
            View msg
          </button>
        </td>
      </tr>
    </div>
  );
};

export default TrMessage;
