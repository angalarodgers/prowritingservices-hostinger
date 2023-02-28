import React, { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import FormatDate from "../format-date/FormatDate";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";

const OrderDetails = ({ order }) => {
  console.log(order);
  const [files, setFiles] = useState([]);
  const [ferror, setErrors] = useState();
  useEffect(() => {
    try {
      makeRequest.get("/orders/getOrderFiles/" + order.id).then((res) => {
        console.log(res.data);
        setFiles(res.data);
      });
    } catch (error) {
      setErrors(error.response.data);
    }
  }, []);
  console.log(files);
  if (files.length > 0) {
  }
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card mg-b-30">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-header-title tx-13 mb-0">{order.topic}</h6>
              </div>
            </div>
          </div>
          <div className="card-body pd-0">
            <table className="table table-primary table-striped table-hover">
              <tbody>
                <tr>
                  <th scope="row">Order ID</th>
                  <td>{order.id}</td>
                  <td scope="row">
                    <strong>Topic</strong>
                  </td>
                  <td>{order.topic}</td>
                </tr>
                <tr>
                  <th scope="row">Client ID</th>
                  <td>{order.client_id}</td>
                  <td scope="row">
                    <strong>Paper Type</strong>
                  </td>
                  <td>{order.paper_type}</td>
                </tr>
                <tr>
                  <th scope="row">Pages</th>
                  <td>{order.pages}</td>
                  <td scope="row">
                    <strong>Discipline</strong>
                  </td>
                  <td>{order.discipline}</td>
                </tr>
                <tr>
                  <th scope="row">Words</th>
                  <td>{order.words}</td>
                  <td scope="row">
                    <strong>Academic Level</strong>
                  </td>
                  <td>{order.academic_level}</td>
                </tr>
                <tr>
                  <th scope="row">Price</th>
                  <td>{order.price}</td>
                  <td scope="row">
                    <strong>Deadline</strong>
                  </td>
                  <td>
                    <FormatDate utcdate={order.createdAt} />
                  </td>
                </tr>
              </tbody>
              <div className="row">
                <div className="col-sm-12">
                  <div className="card-body">
                    <p>Paper Intructions : {order.paper_instructions}</p>
                    <p>
                      Files :
                      {ferror
                        ? "Something Went Wring"
                        : files.map((file) => (
                            <li>
                              {" "}
                              <a
                                href={`../../../../client/public/order_files/${file.file}`}
                              >
                                {file.file}
                              </a>{" "}
                            </li>
                          ))}
                    </p>
                  </div>
                </div>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
