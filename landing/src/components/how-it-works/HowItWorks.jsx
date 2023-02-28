import React from "react";
import "./HowItWorks.scss";

const HowItWorks = () => {
  return (
    <>
      <h1 className="text-center mg-t-50 " style={{ color: "#737373" }}>
        How Essay Writing Service Works
      </h1>
      <div
        className="lead col-md-10 col-lg-8 col-xl-7 text-center tx-gray-500 p-0
        mx-auto mb-4"
      >
        To hire a writer, It takes three simple steps.
      </div>

      <div className="row">
        <div className="col-md-2 my-4"></div>
        <div className="col-md-8 my-4">
          <h5>
            <span
              className="ti-bookmark-alt tx-30 align-middle"
              style={{ color: "#F28322" }}
            />
            <span className="align-middle">
              {" "}
              Fill In the order details section
            </span>
          </h5>
          <div className="ui-company-text  tx-gray-500">
            Complete the order form by filling in the details of your paper.{" "}
            <br />
            Choose the type of paper, Discipline, Academic level, number of
            pages, and Deadline among other essential details.
          </div>
        </div>
        <div className="col-md-2 my-4"></div>
        <div className="col-md-2 my-4"></div>
        <div className="col-md-8 my-4">
          <h5>
            <span
              className="ti-user tx-30 align-middle"
              style={{ color: "#F28322" }}
            />
            <span className="align-middle"> Order is assigned to writer</span>
          </h5>
          <div className="ui-company-text  tx-gray-500">
            A professional essay writer is assigned your paper, depending on
            paper details. The paper writer is chosen based on reviews from
            other customers, orders completed, discipline statistics, and the
            writer's overall rating. You will be required to reserve a deposit
            for your paper at this stage.
          </div>
        </div>
        <div className="col-md-2 my-4"></div>
        <div className="col-md-2 my-4"></div>
        <div className="col-md-8 my-4">
          <h5>
            <span
              className="ti-cloud-down tx-30 align-middle"
              style={{ color: "#F28322" }}
            />
            <span className="align-middle"> Download the complete order</span>
          </h5>
          <div className="ui-company-text  tx-gray-500">
            Once the essay writer completes your paper, you can review it as you
            pay. If you need revision on your paper, you can chat with the
            writer about changes to be made. Once you are satisfied with the
            paper, complete the payment and give us feedback on our essay
            writing service.
          </div>
        </div>
        <div className="col-md-2 my-4"></div>
      </div>
      <div className="text-center mt-5">
        <a
          href="#"
          className="btn btn-warning"
          style={{ color: "white", borderRadius: "10px" }}
        >
          Hire a writer
        </a>
      </div>
    </>
  );
};

export default HowItWorks;
