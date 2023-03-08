import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-sm-7 py-1 position-relative mt-2">
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="mt-n8 mt-md-n9 text-center">
              <h3>How Essay Writing Service Works</h3>
              <h5>To hire a writer, It takes three simple steps.</h5>
            </div>
            <div className="row py-5">
              <div className="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="row justify-content-start">
                      <div className="col-md-12">
                        <div className="info">
                          <h5>
                            {" "}
                            <i className="material-icons text-gradient text-info">
                              article
                            </i>
                            &nbsp; 1. Fill In the order details section
                          </h5>
                          <p>
                            Complete the order form by filling in the details of
                            your paper. Choose the type of paper, Discipline,
                            Academic level, number of pages, and Deadline among
                            other essential details.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="info">
                          <h5>
                            <i className="material-icons text-gradient text-info">
                              person
                            </i>
                            &nbsp; 2. Order is assigned to writer
                          </h5>
                          <p>
                            A professional essay writer is assigned your paper,
                            depending on paper details. The paper writer is
                            chosen based on reviews from other customers, orders
                            completed, discipline statistics, and the writer's
                            overall rating. You will be required to reserve a
                            deposit for your paper at this stage.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-start mt-4">
                      <div className="col-md-12">
                        <div className="info">
                          <h5>
                            <i className="material-icons  text-gradient text-info">
                              download
                            </i>
                            &nbsp; 3. Download the complete order
                          </h5>
                          <p>
                            Once the essay writer completes your paper, you can
                            review it as you pay. If you need revision on your
                            paper, you can chat with the writer about changes to
                            be made. Once you are satisfied with the paper,
                            complete the payment and give us feedback on our
                            essay writing service.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
