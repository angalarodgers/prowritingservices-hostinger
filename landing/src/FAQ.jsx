import React from "react";
import Bottom from "./components/bottom/Bottom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

const FAQ = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="container">
        <div className="page-inner">
          <div className="main-wrapper">
            <div class="flex-grow-1 mg-b-30">
              <div class="row mt-4 clearfix">
                <div class="col-lg-4 col-xl-3">
                  <div className="card-body pd-15">
                    <h5 className="mg-t-20">Have any questions ?</h5>
                    <p className="text-muted font-13 mg-b-30">
                      Email us your Questions or you can send us twitter.
                    </p>
                    <form>
                      <div className="form-group row">
                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            type="text"
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            type="email"
                            id="example-email-input3"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            type="text"
                            id="subject2"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={4}
                          placeholder="Your message"
                          spellCheck="false"
                          defaultValue={""}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-warning btn-block px-4"
                        style={{ color: "white" }}
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>

                <div class="col-lg-8 col-xl-9">
                  <div className="media align-items-center mg-t-30 mg-b-30">
                    <div className="media-body lh-2">
                      <span className="tx-24 tx-medium">F.A.Q</span>
                    </div>
                  </div>

                  <div id="accordionCollapse" className="accordion">
                    <h6 className="accordion-title">
                      How does Pro Writing Services Work?
                    </h6>
                    <div className="accordion-body">
                      <p>
                        We provide expert essay writing assistance. The client
                        places an order on our website, outlines their
                        specifications and timeframes, and then pays for the
                        order.
                      </p>
                      <p>
                        The client can interact with the writer anytime to
                        ensure the final products meet their requirements. Once
                        completed, the essay will be proofread and checked for
                        plagiarism. Afterward, the client can review the
                        assignment and, if necessary, ask for adjustments. As
                        soon as the client is happy with the final essay, they
                        can download it from the site.
                      </p>
                    </div>
                    <h6 className="accordion-title">
                      How long will it take for my essay to be ready?
                    </h6>
                    <div className="accordion-body">
                      <p>
                        The length of the essay, the difficulty of the subject,
                        and the deadline you have set all affect how long it
                        will take to complete your assignment. You will be
                        prompted to enter your deadline when making an order.
                        It's crucial to keep in mind that we might charge more
                        for rush orders, so it's ideal to plan before you order
                        your assignment.
                      </p>
                    </div>
                    <h6 className="accordion-title">
                      How do I upload my assignment on Pro Writing Services?
                    </h6>
                    <div className="accordion-body">
                      <p>
                        Sign up with the site, log in (if you already have an
                        account), and then go to the order page. As you fill out
                        the form, be sure to include information about your
                        assignment's topic, length, format, and due date.
                      </p>
                    </div>
                    <h6 className="accordion-title">
                      What makes your essay writing services stand out?
                    </h6>
                    <div className="accordion-body">
                      <p>
                        Our essay writing services stand out from the
                        competition thanks to the expertise of our writers, our
                        rigorous adherence to deadlines, and our dedication to
                        delivering 100% unique work. Besides checking for
                        grammatical mistakes, we also ensure that all the
                        writing assignments follow your specific guidelines.
                      </p>
                    </div>

                    <h6 className="accordion-title">
                      What Sort of academic writing services do you offer?
                    </h6>
                    <div className="accordion-body">
                      <p>
                        Our academic writing services comprise essays, research
                        papers, theses, and dissertations, to mention a few. We
                        also offer editing and proofreading services.
                      </p>
                    </div>

                    <h6 className="accordion-title">What is your pricing?</h6>
                    <div className="accordion-body">
                      <p>
                        The pricing of our academic writing assignments varies
                        based on the service type, the length of the paper, and
                        the deadline. That said, we provide discounted prices
                        for recurring clients.
                      </p>
                    </div>

                    <h6 className="accordion-title">
                      Do you have any procedures or assurances in place to
                      assure the quality of your work?
                    </h6>
                    <div className="accordion-body">
                      <p>
                        Yes. We have strict quality control policies to
                        guarantee that all our academic writing assignments are
                        meticulously reviewed before they are handed to the
                        client. Additionally, we have a confidentiality policy
                        to guarantee that all client information and order
                        details are kept private and not disclosed to third
                        parties.
                      </p>
                    </div>

                    <h6 className="accordion-title">
                      Do you have any samples of your previously completed
                      academic papers?
                    </h6>
                    <div className="accordion-body">
                      <p>
                        Yes. We do offer samples of our prior academic writing
                        upon request. If you need to check the samples first, be
                        sure to communicate with your essay writer in advance.
                      </p>
                    </div>

                    <h6 className="accordion-title">
                      What are the fundamental steps in writing quality academic
                      assignments?
                    </h6>
                    <div className="accordion-body">
                      <p>
                        The key steps to writing quality assignments are
                        creating a clear thesis statement, answering the main
                        question, and editing and proofreading for grammar and
                        clarity. Among those who use our academic writing help
                        are students and researchers.
                      </p>
                    </div>

                    <h6 className="accordion-title">
                      What is the fastest way to improve my writing?
                    </h6>
                    <div className="accordion-body">
                      <p>
                        The quickest way to improve your academic writing
                        prowess is to practice regularly and seek feedback on
                        your work. You should also consider working with expert
                        academic writers who will provide guidance, tips, and
                        examples to help you become a better writer.
                        Additionally, you can ask these expert writers to help
                        review your work and offer constructive feedback and
                        suggestions for improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Bottom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
