import React from "react";
import FormatDate from "../../components/format-date/FormatDate";

const Writer = ({ writer }) => {
  return (
    <tr>
      <td>{writer.id}</td>
      <td> {writer.email}</td>

      <td>
        <FormatDate utcdate={writer.createdAt} />
      </td>
    </tr>
  );
};

export default Writer;
