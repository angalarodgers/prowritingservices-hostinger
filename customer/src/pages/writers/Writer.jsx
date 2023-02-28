import React from "react";

const Writer = ({ writer }) => {
  console.log(writer);
  return (
    <div className="card col-sm-3 mb-2 ms-1">
      <div className="card-body pt-3">
        <div className="author align-items-center">
          <img src="./images/p-01.png" alt="..." className="avatar shadow" />
          <div className="name ps-3">
            <span>{writer.img}</span>
            <div className="stats">
              <small>Writer ID: {writer.id}</small>
            </div>
          </div>
        </div>

        <p className="card-description mb-4"></p>
      </div>
    </div>
  );
};

export default Writer;
