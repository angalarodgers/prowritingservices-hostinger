import React from "react";

const date = ({ date }) => {
  const date = new Date(date);
  return (
    <div>
      <p>
        <small>{date.toLocaleString()}</small>
      </p>
    </div>
  );
};

export default date;
