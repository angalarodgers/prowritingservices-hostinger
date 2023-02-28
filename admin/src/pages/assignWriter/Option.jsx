import React from "react";

const Option = ({ writer }) => {
  return (
    <option value={writer.id}>
      {writer.id}, {writer.email}
    </option>
  );
};

export default Option;
