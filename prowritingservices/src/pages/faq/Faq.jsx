import React, { useState } from "react";
import Footer from "../../constants/Footer";
import Navbar from "../../constants/Navbar";

const Faq = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      <Navbar />
      <header className="bg-gradient-dark"></header>
      <div
        className="card card-body shadow-xl mx-3 mx-md-4 mt-3"
        style={{ backgroundColor: "#D8E8F2" }}
      >
        {/* Section with four info areas left & one card right with image and waves */}
        <section className="py-7">
          <div className="container">
            <div className="row align-items-center">
              <div className="accordion-1">
                <div className="container">
                  <div className="row my-5">
                    <div className="col-md-6 mx-auto text-center">
                      <h2>Frequently Asked Questions</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="accordion" id="accordionRental">
                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button border-bottom font-weight-bold collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                            >
                              How does Pro Writing Services Work?
                              <i
                                className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                              <i
                                className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                            </button>
                          </h5>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionRental"
                            style={{}}
                          >
                            <div className="accordion-body text-sm opacity-8">
                              <p style={{ color: "#344767" }}>
                                We provide expert essay writing assistance. The
                                client places an order on our website, outlines
                                their specifications and timeframes, and then
                                pays for the order.
                              </p>
                              <p style={{ color: "#344767" }}>
                                {" "}
                                We’re not always in the position that we want to
                                be at. We’re constantly growing. We’re
                                constantly making mistakes. We’re constantly
                                trying to express ourselves and actualize our
                                dreams. If you have the opportunity to play this
                                game of life you need to appreciate every
                                moment. A lot of people don’t appreciate the
                                moment until it’s passed.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button border-bottom font-weight-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              How long will it take for my essay to be ready?
                              <i
                                className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                              <i
                                className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                            </button>
                          </h5>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionRental"
                          >
                            <div className="accordion-body text-sm opacity-8">
                              <p style={{ color: "#344767" }}>
                                The length of the essay, the difficulty of the
                                subject, and the deadline you have set all
                                affect how long it will take to complete your
                                assignment. You will be prompted to enter your
                                deadline when making an order. It's crucial to
                                keep in mind that we might charge more for rush
                                orders, so it's ideal to plan before you order
                                your assignment.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button border-bottom font-weight-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              How do I upload my assignment on Pro Writing
                              Services?
                              <i
                                className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                              <i
                                className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                            </button>
                          </h5>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionRental"
                          >
                            <div className="accordion-body text-sm opacity-8">
                              <p style={{ color: "#344767" }}>
                                Sign up with the site, log in (if you already
                                have an account), and then go to the order page.
                                As you fill out the form, be sure to include
                                information about your assignment's topic,
                                length, format, and due date.{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header" id="headingFour">
                            <button
                              className="accordion-button border-bottom font-weight-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              What makes your essay writing services stand out?
                              <i
                                className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                              <i
                                className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                            </button>
                          </h5>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionRental"
                          >
                            <div className="accordion-body text-sm opacity-8">
                              <p style={{ color: "#344767" }}>
                                Our essay writing services stand out from the
                                competition thanks to the expertise of our
                                writers, our rigorous adherence to deadlines,
                                and our dedication to delivering 100% unique
                                work. Besides checking for grammatical mistakes,
                                we also ensure that all the writing assignments
                                follow your specific guidelines.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header" id="headingFifth">
                            <button
                              className="accordion-button border-bottom font-weight-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFifth"
                              aria-expanded="false"
                              aria-controls="collapseFifth"
                            >
                              What Sort of academic writing services do you
                              offer?
                              <i
                                className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                              <i
                                className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                            </button>
                          </h5>
                          <div
                            id="collapseFifth"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFifth"
                            data-bs-parent="#accordionRental"
                          >
                            <div className="accordion-body text-sm opacity-8">
                              <p style={{ color: "#344767" }}>
                                Our academic writing services comprise essays,
                                research papers, theses, and dissertations, to
                                mention a few. We also offer editing and
                                proofreading services.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header" id="headingSixth">
                            <button
                              className="accordion-button border-bottom font-weight-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSixth"
                              aria-expanded="false"
                              aria-controls="collapseFifth"
                            >
                              What is your pricing?
                              <i
                                className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                              <i
                                className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                            </button>
                          </h5>
                          <div
                            id="collapseSixth"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSixth"
                            data-bs-parent="#accordionRental"
                          >
                            <div className="accordion-body text-sm opacity-8">
                              <p style={{ color: "#344767" }}>
                                The pricing of our academic writing assignments
                                varies based on the service type, the length of
                                the paper, and the deadline. That said, we
                                provide discounted prices for recurring clients.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header" id="headingSeventh">
                            <button
                              className="accordion-button border-bottom font-weight-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSeventh"
                              aria-expanded="false"
                              aria-controls="collapseFifth"
                            >
                              Do you have any procedures or assurances in place
                              to assure the quality of your work?
                              <i
                                className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                              <i
                                className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                            </button>
                          </h5>
                          <div
                            id="collapseSeventh"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSeventh"
                            data-bs-parent="#accordionRental"
                          >
                            <div className="accordion-body text-sm opacity-8">
                              <p style={{ color: "#344767" }}>
                                Yes. We have strict quality control policies to
                                guarantee that all our academic writing
                                assignments are meticulously reviewed before
                                they are handed to the client. Additionally, we
                                have a confidentiality policy to guarantee that
                                all client information and order details are
                                kept private and not disclosed to third parties.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header" id="headingEight">
                            <button
                              className="accordion-button border-bottom font-weight-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseEight"
                              aria-expanded="false"
                              aria-controls="collapseFifth"
                            >
                              Do you have any samples of your previously
                              completed academic papers?
                              <i
                                className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                              <i
                                className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                            </button>
                          </h5>
                          <div
                            id="collapseEight"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEight"
                            data-bs-parent="#accordionRental"
                          >
                            <div className="accordion-body text-sm opacity-8">
                              <p style={{ color: "#344767" }}>
                                Yes. We do offer samples of our prior academic
                                writing upon request. If you need to check the
                                samples first, be sure to communicate with your
                                essay writer in advance.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header" id="headingNine">
                            <button
                              className="accordion-button border-bottom font-weight-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseNine"
                              aria-expanded="false"
                              aria-controls="collapseFifth"
                            >
                              What are the fundamental steps in writing quality
                              academic assignments?
                              <i
                                className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                              <i
                                className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                            </button>
                          </h5>
                          <div
                            id="collapseNine"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingNine"
                            data-bs-parent="#accordionRental"
                          >
                            <div className="accordion-body text-sm opacity-8">
                              <p style={{ color: "#344767" }}>
                                The key steps to writing quality assignments are
                                creating a clear thesis statement, answering the
                                main question, and editing and proofreading for
                                grammar and clarity. Among those who use our
                                academic writing help are students and
                                researchers.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header" id="headingTen">
                            <button
                              className="accordion-button border-bottom font-weight-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTen"
                              aria-expanded="false"
                              aria-controls="collapseFifth"
                            >
                              What is the fastest way to improve my writing?
                              <i
                                className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                              <i
                                className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3"
                                aria-hidden="true"
                              />
                            </button>
                          </h5>
                          <div
                            id="collapseTen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTen"
                            data-bs-parent="#accordionRental"
                          >
                            <div className="accordion-body text-sm opacity-8">
                              <p style={{ color: "#344767" }}>
                                The quickest way to improve your academic
                                writing prowess is to practice regularly and
                                seek feedback on your work. You should also
                                consider working with expert academic writers
                                who will provide guidance, tips, and examples to
                                help you become a better writer. Additionally,
                                you can ask these expert writers to help review
                                your work and offer constructive feedback and
                                suggestions for improvement.
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
      </div>

      <Footer />
    </div>
  );
};

export default Faq;
