import React from "react";

const Managers = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10">
          <h2 className="page-title">Managers</h2>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Title</th>
                <th>Discipline</th>
                <th>Deadline</th>
                <th>Pages</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10092</td>
                <td> Order Title</td>
                <td>Order Description</td>
                <td>12/3/2023</td>
                <td>8</td>
                <td style={{ color: "green" }}> $20.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Managers;
