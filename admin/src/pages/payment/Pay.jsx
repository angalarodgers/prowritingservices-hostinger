import React from "react";

const Pay = ({ pay }) => {
  return (
    <tr>
      <td>{pay.id}</td>
      <td>{pay.client_id}</td>
      <td>{pay.payment_order_id}</td>
      <td style={{ color: "green" }}>
        <strong>${pay.amount}</strong>
      </td>
      <td>{pay.madeAt}</td>
      <td>{pay.payer_id}</td>
      <td>{pay.facilitatorAccessToken}</td>
      <td>{pay.paymentSource}</td>
    </tr>
  );
};

export default Pay;
