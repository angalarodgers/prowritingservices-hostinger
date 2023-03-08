import React from "react";
import Footer from "../../constants/Footer";
import Navbar from "../../constants/Navbar";
import proWritingServicesLogo from "../../assets/p-01.png";
import writingImage from "../../assets/logo.png";

import "./AboutUs.css";
import Slider from "./Slider";

const About = () => {
  return (
    <div>
      <Navbar />
      <header className="bg-gradient-dark"></header>
      <div
        className="card card-body shadow-xl mx-3 mx-md-4 mt-3"
        style={{ backgroundColor: "#D8E8F2" }}
      >
        <section className="py-4">
          <div className="container py-5">
            <h1 className="text-center mb-4">
              Professional Writing at Your Convenience
            </h1>

            <div className="row">
              <div className="col-md-6">
                <img
                  style={{ borderRadius: "10px" }}
                  src="https://source.unsplash.com/600x400/?writing"
                  alt="Writing"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <h2>Our Writers</h2>
                <p>
                  At the heart of our academic writing services are specialized
                  writers with proven track records in their respective fields.
                  To ensure that our clients get the best results, we thoroughly
                  vet our writers to ensure they are qualified, trustworthy, and
                  reliable.
                </p>
                <h3>How We Choose Our Writers</h3>
                <ul>
                  <li>
                    <i className="fas fa-check mr-2"></i>
                    Proof of Identity
                  </li>
                  <li>
                    <i className="fas fa-check mr-2"></i>
                    Skills and Experience Verification
                  </li>
                </ul>
                <p>
                  After receiving the writers' certificates, we check to verify
                  their authenticity. We then pick the most qualified candidates
                  and schedule an interview within two weeks after the
                  application. Besides a thorough Q&A session, we will also
                  request some writing samples.
                </p>
              </div>
              <div className="col-md-12">
                <h4>Test Assignment</h4>
                <p>
                  We will schedule a test assignment if the writer passes the
                  interview and their samples meet our quality standards. This
                  is a critical step in the selection process as it determines
                  whether the writer is a good fit for our team.
                </p>
                <h4>Probation</h4>
                <p>
                  The final step of the selection process is the trial period,
                  which could run anywhere from two weeks to a month. Our
                  quality assurance team will work with writers on probation to
                  ensure they deliver quality work within the stipulated time.
                  Those who pass probation join our full-time list of writers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="mb-4">What Makes Us Unique</h2>
                <p className="lead mb-4">
                  Get high-quality, affordable, and reliable academic writing
                  services from expert writers. With Pro Writing Services, you
                  can expect clear communication, fast turn-around times, and
                  total transparency. Say goodbye to overpriced services and
                  hello to a stress-free academic life!
                </p>
              </div>
              <div className="col-md-12 my-auto">
                <h4 className="mb-3">Our Value Proposition</h4>
              </div>
              <div className="col-md-6 my-auto">
                <ul className="list-unstyled">
                  <li className="d-flex mb-3">
                    <i className="fa fa-check-circle text-success me-3" />
                    <div>
                      <h5 className="mb-0">Quality and Affordability</h5>
                      <p className="mb-0">
                        We offer high-quality writing services at affordable
                        prices to help you succeed in your academic career.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="fa fa-check-circle text-success me-3" />
                    <div>
                      <h5 className="mb-0">Personalized Writing Services</h5>
                      <p className="mb-0">
                        Our expert writers provide personalized writing services
                        tailored to your specific needs and requirements.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 my-auto">
                <ul className="list-unstyled">
                  <li className="d-flex mb-3">
                    <i className="fa fa-check-circle text-success me-3" />
                    <div>
                      <h5 className="mb-0">Fast Turn-around Times</h5>
                      <p className="mb-0">
                        We understand the importance of deadlines and provide
                        fast turn-around times to ensure your success.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="fa fa-check-circle text-success me-3" />
                    <div>
                      <h5 className="mb-0">Transparency and Safety</h5>
                      <p className="mb-0">
                        We believe in total transparency and safety, so you can
                        trust us to deliver high-quality writing services
                        without any worries.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12 order-1 order-md-2 my-auto">
                <h2 className="mb-4">Who We Are</h2>
                <p className="lead mb-4">
                  We are a team of experienced writers who are passionate about
                  helping students achieve their academic goals. With years of
                  experience in academic writing, we have the knowledge and
                  expertise to deliver high-quality writing services that meet
                  your needs and exceed your expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="what-we-do" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center mb-4">What We Do</h2>
                <p className="lead mb-4">
                  Regardless of your academic writing needs, you can rest
                  assured knowing that a team of professional writers is at your
                  service. Below are the services we offer.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="card border-0 text-center mb-4">
                  <div className="card-body">
                    <i className="fas fa-pen fa-4x mb-4" />
                    <h4 className="card-title">Writing</h4>
                    <p className="card-text">
                      Let us know what you want to be written, and our writers
                      will get you top-notch and original essays and papers.
                      Trust us to deliver well-researched and engaging content
                      for your academic needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="card border-0 text-center mb-4">
                  <div className="card-body">
                    <i className="fas fa-edit fa-4x mb-4" />
                    <h4 className="card-title">Editing</h4>
                    <p className="card-text">
                      A poorly edited paper or essay is a deal-breaker. Submit
                      your writing for editing, and get error-free and polished
                      work. Trust our team of writers to improve your writing's
                      flow and clarity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="card border-0 text-center mb-4">
                  <div className="card-body">
                    <i className="fas fa-check fa-4x mb-4" />
                    <h4 className="card-title">Proofreading</h4>
                    <p className="card-text">
                      Avoid grammar, spelling, and other petty mistakes. Submit
                      your work confidently, knowing that our writers will
                      instantly catch any errors and correct them. Be sure to
                      specify if your order is urgent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="card border-0 text-center mb-4">
                  <div className="card-body">
                    <i className="fas fa-redo-alt fa-4x mb-4" />
                    <h4 className="card-title">Rewriting</h4>
                    <p className="card-text">
                      If you need your existing work rewritten, we can help.
                      Just specify what you want, and our writers will do it for
                      you. Give clear instructions to ensure the final work is
                      rewritten for clarity and impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container my-5">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="mb-4">Why Work With Us</h2>
              <p className="lead mb-4">
                At Pro Writing Services, we pride ourselves on our commitment to
                quality, punctuality, transparency in our processes, and the
                assurance of privacy and safety of your information.
              </p>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="mr-3">
                      <i className="fas fa-clock fa-2x" />
                    </div>
                    <div>
                      <h4 className="mb-3">We are Punctual</h4>
                      <p className="text-muted">
                        You don't have to worry about missing deadlines when you
                        work with us. Our writers understand the importance of
                        timely submissions, and we stick to our promises.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="mr-3">
                      <i className="fas fa-trophy fa-2x" />
                    </div>
                    <div>
                      <h4 className="mb-3">We Prioritize Quality</h4>
                      <p className="text-muted">
                        At Pro Writing Services, quality is at the forefront of
                        everything we do. From expert writing to thorough
                        editing and proofreading, we're committed to delivering
                        the best work possible.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="mr-3">
                      <i className="fas fa-comments fa-2x" />
                    </div>
                    <div>
                      <h4 className="mb-3">We are Transparent</h4>
                      <p className="text-muted">
                        Trust is hard to come by, and we care about your work as
                        much as our brand. That is why we keep an open line of
                        communication throughout the writing process.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="mr-3">
                      <i className="fas fa-lock fa-2x" />
                    </div>
                    <div>
                      <h4 className="mb-3">Your Information is Safe</h4>
                      <p className="text-muted">
                        <small>
                          Protecting your personal and financial information is
                          our top priority. We value your anonymity and use
                          encrypted systems to protect your data and ensure your
                          peace of mind.
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="mb-4">What Our Customers Say </h2>
              <Slider />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
