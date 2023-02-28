import React from "react";

const FormatDate = ({ utcdate }) => {
  const date = new Date(utcdate);
  return (
    <div>
      <p>
        <i>{date.toLocaleString()}</i>
      </p>
    </div>
  );
};

export default FormatDate;
