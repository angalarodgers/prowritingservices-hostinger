import React from "react";

const OrderInprogress = ({ order }) => {
  return (
    <tr>
      <td className="align-middle text-center text-sm">
        <span className="text-xs font-weight-bold"> {order.id} </span>
      </td>
      <td className="align-middle text-center text-sm">
        <span className="text-xs font-weight-bold"> {order.topic} </span>
      </td>
      <td className="align-middle text-center text-sm">
        <span className="text-xs font-weight-bold"> {order.price} </span>
      </td>
      <td className="align-middle text-center text-sm">
        <span className="text-xs font-weight-bold"> {order.createdAt} </span>
      </td>
      {/* <td className="align-middle">
        <div className="progress-wrapper w-75 mx-auto">
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-gradient-info w-60"
              role="progressbar"
              aria-valuenow={60}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </td> */}
    </tr>
  );
};

export default OrderInprogress;
