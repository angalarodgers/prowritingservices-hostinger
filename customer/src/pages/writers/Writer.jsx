import React from "react";

const Writer = ({ writer }) => {
  console.log(writer);
  return (
    <div className="col-12 col-xl-4 mb-4 mt-2">
      <div className="card h-100">
        <div className="card-header pb-0 p-3">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <h6 className="mb-0">Writer ID: {writer.id}</h6>
            </div>
            <div className="col-md-6 text-end">
              <span>
                Rating: <strong>90%</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="card-body p-3">
          <p className="text-sm">
            <div>
              <p>
                <a
                  className="btn btn-primary btn-simple mb-0 ps-1 pe-2 py-0"
                  data-bs-toggle="collapse"
                  href={`#collapseExample${writer.id}`}
                  role="button"
                  aria-expanded="false"
                  aria-controls={`collapseExample${writer.id}`}
                >
                  Bio
                </a>
              </p>
              <div className="collapse" id={`collapseExample${writer.id}`}>
                <div className="card card-body">Not Updated</div>
              </div>
            </div>
          </p>
          <hr className="horizontal gray-light my-1" />
          <ul className="list-group">
            <li className="list-group-item border-0 ps-0 pt-0 text-sm">
              <strong className="text-dark">Full Name:</strong> &nbsp;{" "}
              {writer.name}
            </li>
            <li className="list-group-item border-0 ps-0 pt-0 text-sm">
              <strong className="text-dark">Orders Completed: </strong> &nbsp;{" "}
              24
            </li>
            <li className="list-group-item border-0 ps-0 pt-0 text-sm">
              <strong className="text-dark">Orders Canceled: </strong> &nbsp; 24
            </li>

            <li className="list-group-item border-0 ps-0 pb-0">
              <strong className="text-dark text-sm"></strong> &nbsp;
              <a
                className="btn btn-outline-primary btn-simple mb-0 ps-1 pe-2 py-0 m-1"
                href="javascript:;"
              >
                Select Writer
              </a>
              <a
                className="btn btn-outline-primary btn-simple mb-0 ps-1 pe-2 py-0 m-1"
                onClick={() => handleChatWithMeClick(writer.id)}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Chat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Writer;
