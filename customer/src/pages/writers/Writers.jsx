import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { makeRequest } from "../../axios";
import {
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { useQuery } from "react-query";
import { useEffect } from "react";
import Writer from "./Writer";

const Writers = () => {
  const { isLoading, error, data } = useQuery("writers", () =>
    makeRequest.get("/writers/getWriters").then((res) => {
      console.log(res.data);
      return res.data;
    })
  );
  return (
    <div className="accordion-1 py-5 mt-5">
      <div className="container">
        <div className="row ">
          <h6 style={{ color: "#F27329" }}>Writers</h6>
        </div>
        <div className="row card">
          <div className="col-md-10 mx-auto ">
            <div className="accordion" id="accordionRental">
              <div className="card-group">
                <div className="row">
                  {data && (
                    <>
                      {error
                        ? "Something Went Wring"
                        : isLoading
                        ? "Loading"
                        : data.map((writer) => (
                            <Writer writer={writer} key={writer.id} />
                          ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writers;
