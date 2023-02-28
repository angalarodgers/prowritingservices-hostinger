import React from "react";

const Text = ({ text }) => {
  return (
    <p
      className="card-description mb-4 p-2"
      style={{
        backgroundColor: "#A1C5F4",
        borderBottomRightRadius: "10px",
        borderTopLeftRadius: "10px",
      }}
    >
      <label htmlFor="">{text.msg}</label>
    </p>
  );
};

export default Text;
