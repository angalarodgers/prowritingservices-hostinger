import React from "react";
import { useState } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { makeRequest } from "../../axios";
import toast, { Toaster } from "react-hot-toast";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const CraeteOrderForm = () => {
  const [file, setFile] = useState(null);
  var [pages, setPages] = useState(1);
  var [words, setWords] = useState(275);
  var [price, setPrice] = useState(19.99);
  var [p, setP] = useState(19.99);
  const [inputs, setInputs] = useState({
    topic: "",
    paper_type: "",
    discipline: "",
    academic_level: "",
    paper_instructions: "",
    pages: 0,
    words: 0,
    spacing: "",
    services: "",
    style: "",
    sources: 0,
    price: 0.0,
    deadline: "",
  });
  function calculations() {
    words = pages * 275;
    price = pages * p;
    setPages(pages);
    setWords(words);
    setPrice(price);
    inputs.pages = pages;
  }

  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };

  const handleAdd = () => {
    pages += 1;
    if (pages > 15) {
      pages = 15;
    }
    calculations();
  };
  const handleMinus = () => {
    pages -= 1;
    if (pages < 1) {
      pages = 1;
    }
    calculations();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.topic.length === 0) {
      toast.error("Topic reqyured!");
    } else if (inputs.discipline.length === 0) {
      toast.error("Discipline required!");
    } else {
      toast.success("Submitting...");
      try {
        inputs.price = price;
        inputs.words = words;
        const res = await makeRequest.post("/orders", inputs);
        console.log(res.data);
        toast.success("Order Successfully Created!");
        await sleep(3000);
        navigate({
          pathname: "/upload-file",
          search: createSearchParams({
            id: res.data,
          }).toString(),
        });
      } catch (error) {
        toast.error(error);
      }
    }
  };
  return (
    <div className="container py-4 mt-5">
      <div className="row">
        <div className="col-md-12 mb-lg-0 mb-4">
          <div className="card mt-4">
            <div className="card-header pb-0 p-3">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <h6 className="mb-0">Create New Order</h6>
                </div>
              </div>
            </div>
            <div className="card-body p-3">
              <div className="row">
                <div className="col-md-6 mb-md-0 mb-4">
                  <div className="card card-body border card-plain border-radius-lg  ">
                    <div className="row">
                      <div className="col-sm-12">
                        <form action="">
                          <div className="form-group">
                            <label
                              htmlFor="example-text-input"
                              className="form-control-label"
                            >
                              Topic
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              defaultValue=""
                              placeholder="Paper Topic"
                              id="example-text-input"
                              name="topic"
                              onChange={handleChange}
                              value={inputs.topic}
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">
                              Type Of Paper
                            </label>
                            <select
                              className="form-control"
                              id="exampleFormControlSelect1"
                              name="paper_type"
                              onChange={handleChange}
                            >
                              <option value="" disabled>
                                Type Of Paper
                              </option>
                              <option value="Admission Essay">
                                Admission Essay
                              </option>
                              <option value="Annotated Bibliography">
                                Annotated Bibliography
                              </option>
                              <option value="Argumentative essay">
                                Argumentative essay
                              </option>
                              <option value="Article Review">
                                Article Review
                              </option>
                              <option value="Article Writing">
                                Article Writing
                              </option>
                              <option value="Assignment (Any type)">
                                Assignment (Any type)
                              </option>
                              <option value="Book/Movie Review">
                                Book/Movie Review
                              </option>
                              <option value="Business Plan">
                                Business Plan
                              </option>
                              <option value="Business Proposal">
                                Business Proposal
                              </option>
                              <option value="Capstone Project">
                                Capstone Project
                              </option>
                              <option value="Case Study">Case Study</option>
                              <option value="Coursework">Coursework</option>
                              <option value="Creative Writing">
                                Creative Writing
                              </option>
                              <option value="Critical Thinking / Review">
                                Critical Thinking / Review
                              </option>
                              <option value="Discussion Post">
                                Discussion Post
                              </option>
                              <option value="Essay (any type)">
                                Essay (any type)
                              </option>
                              <option value="Homework">Homework</option>
                              <option value="Lab Report">Lab Report</option>
                              <option value="Letter/Memo">Letter/Memo</option>
                              <option value="Literature Review">
                                Literature Review
                              </option>
                              <option value="Marketing Plan">
                                Marketing Plan
                              </option>
                              <option value="Multi-choice questions">
                                Multi-choice questions
                              </option>
                              <option value="Other">Other</option>
                              <option value="Outline">Outline</option>
                              <option value="PowerPoint Presentation (with speaker notes)">
                                PowerPoint Presentation (with speaker notes)
                              </option>
                              <option value="Reaction Paper">
                                Reaction Paper
                              </option>
                              <option value="Reflective Writing">
                                Reflective Writing
                              </option>
                              <option value="Research Paper">
                                Research Paper
                              </option>
                              <option value="Research Proposal">
                                Research Proposal
                              </option>
                              <option value="Script writing">
                                Script writing
                              </option>
                              <option value="Short Answer Questions">
                                Short Answer Questions
                              </option>
                              <option value="SWOT Analysis">
                                SWOT Analysis
                              </option>
                              <option value="Term Paper">Term Paper</option>
                              <option value="Thesis/Dissertation">
                                Thesis/Dissertation
                              </option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">
                              Discipline
                            </label>
                            <select
                              className="form-control"
                              id="exampleFormControlSelect1"
                              name="discipline"
                              onChange={handleChange}
                            >
                              <option
                                value={""}
                                style={{ color: "darkblue" }}
                                disabled
                              >
                                Non-technicals Disciplines
                              </option>
                              <option value="Advertising & Marketing">
                                Advertising & Marketing
                              </option>
                              <option value="Agriculture">Agriculture</option>
                              <option value="Anatomy">Anatomy</option>
                              <option value="Anthropology">Anthropology</option>
                              <option value="Architecture">Architecture</option>
                              <option value="Art">Art</option>
                              <option value="Astronomy">Astronomy</option>
                              <option value="Aviation">Aviation</option>
                              <option value="Biology">Biology</option>
                              <option value="Business & Management">
                                Business & Management
                              </option>
                              <option value="Communications & Media">
                                Communications & Media
                              </option>
                              <option value="Computer Science">
                                Computer Science
                              </option>
                              <option value="Creative Writing">
                                Creative Writing
                              </option>
                              <option value="Criminology">Criminology</option>
                              <option value="Cultural & Tourism">
                                Cultural & Tourism
                              </option>
                              <option value="Drama & Theatre">
                                Drama & Theatre
                              </option>
                              <option value="Economics">Economics</option>
                              <option value="Education">Education</option>
                              <option value="Engineering">Engineering</option>
                              <option value="English & Literature">
                                English & Literature
                              </option>
                              <option value="Entrepreneurship">
                                Entrepreneurship
                              </option>
                              <option value="Environmental Science">
                                Environmental Science
                              </option>
                              <option value="Ethics">Ethics</option>
                              <option value="Fashion">Fashion</option>
                              <option value="Finance & Accounting">
                                Finance & Accounting
                              </option>
                              <option value="Food & Nutrition">
                                Food & Nutrition
                              </option>
                              <option value="Forensic Science">
                                Forensic Science
                              </option>
                              <option value="Geography">Geography</option>
                              <option value="Geology">Geology</option>
                              <option value="Health & Medicine">
                                Health & Medicine
                              </option>
                              <option value="Healthcare & Life Sciences">
                                Healthcare & Life Sciences
                              </option>
                              <option value="History">History</option>
                              <option value="Human Relations">
                                Human Relations
                              </option>
                              <option value="Information Technology (IT)">
                                Information Technology (IT)
                              </option>
                              <option value="International Affairs/Relations">
                                International Affairs/Relations
                              </option>
                              <option value="Journalism & Telecommunication">
                                Journalism & Telecommunication
                              </option>
                              <option value="Law">Law</option>
                              <option value="Linguistics">Linguistics</option>
                              <option value="Logistics">Logistics</option>
                              <option value="Military Science">
                                Military Science
                              </option>
                              <option value="Music">Music</option>
                              <option value="Natural Science">
                                Natural Science
                              </option>
                              <option value="Nursing">Nursing</option>
                              <option value="Others">Others</option>
                              <option value="Pharmacology">Pharmacology</option>
                              <option value="Philosophy">Philosophy</option>
                              <option value="Photography">Photography</option>
                              <option value="Physiology">Physiology</option>
                              <option value="Political Science">
                                Political Science
                              </option>
                              <option value="Psychology">Psychology</option>
                              <option value="Public Administration">
                                Public Administration
                              </option>
                              <option value="Public Relations">
                                Public Relations
                              </option>
                              <option value="Religion & Theology">
                                Religion & Theology
                              </option>
                              <option value="Sociology">Sociology</option>
                              <option value="Sports & Athletics">
                                Sports & Athletics
                              </option>
                              <option value="Urban & Environmental Planning">
                                Urban & Environmental Planning
                              </option>
                              <option value="Veterinary Science">
                                Veterinary Science
                              </option>
                              <option
                                value=""
                                style={{ color: "darkblue" }}
                                disabled
                              >
                                Technical Discipline
                              </option>
                              <option value="Accounting & Finance">
                                Accounting & Finance
                              </option>
                              <option value="Calculus">Calculus</option>
                              <option value="Chemistry">Chemistry</option>
                              <option value="Coding & Programming">
                                Coding & Programming
                              </option>
                              <option value="C#">C#</option>
                              <option value="C++">C++</option>
                              <option value="Java">Java</option>
                              <option value="PHP">PHP</option>
                              <option value="Python">Python</option>
                              <option value="SQL">SQL</option>
                              <option value="Excel">Excel</option>
                              <option value="Mathematics, Geometry & Algebra">
                                Mathematics, Geometry & Algebra
                              </option>
                              <option value="Physics">Physics</option>
                              <option value="Statistics">Statistics</option>
                              <option value="Web design">Web design</option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">
                              Academic Level
                            </label>
                            <select
                              className="form-control"
                              id="exampleFormControlSelect1"
                              name="academic_level"
                              onChange={handleChange}
                            >
                              <option value="">Select...</option>
                              <option value={"High School"}>High School</option>
                              <option value={"College"}>College</option>
                              <option value={"Undergraduate"}>
                                Undergraduate
                              </option>
                              <option value={"Master"}>Master</option>
                              <option value={"PhD"}>PhD</option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">
                              Deadline
                            </label>
                            <input
                              type="datetime-local"
                              className="form-control"
                              id="exampleFormControlInput1"
                              name="deadline"
                              onChange={handleChange}
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">
                              Sources
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="exampleFormControlInput1"
                              name="sources"
                              onChange={handleChange}
                              value={inputs.sources}
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-body border card-plain border-radius-lg ">
                    <form action="">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Paper Intructions
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={3}
                          name="paper_instructions"
                          onChange={handleChange}
                          value={inputs.paper_instructions}
                          defaultValue={""}
                        />
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">
                                Pages
                              </label>
                              <div className="row">
                                <div className="col-sm-8">
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="pages"
                                    value={pages}
                                  />
                                </div>
                                <div className="col-sm-2">
                                  <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={handleMinus}
                                  >
                                    -
                                  </button>
                                </div>
                                <div className="col-sm-2">
                                  <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={handleAdd}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">
                                Words
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="words"
                                value={words}
                              />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            {" "}
                            <div className="form-group">
                              <label htmlFor="exampleFormControlSelect1">
                                Spacing
                              </label>
                              <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                                name="spacing"
                                onChange={handleChange}
                              >
                                <option>Double</option>
                                <option>Single</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Type Of Service
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                          name="service"
                          onChange={handleChange}
                        >
                          <option>Select Type Of Service</option>
                          <option value={"writing"}>Writing</option>
                          <option value={"re-writing"}>Re-Writing</option>
                          <option value={"editing"}>Editing</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Formating Style
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                          name="style"
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            Select Style
                          </option>
                          <option value="AAA">AAA</option>
                          <option value="APA">APA</option>
                          <option value="APSA">APSA</option>
                          <option value="ASA">ASA</option>
                          <option value="Chicago (Turabian) author-date">
                            Chicago (Turabian) author-date
                          </option>
                          <option value="CSE name-year">CSE name-year</option>
                          <option value="Harvard">Harvard</option>
                          <option value="MLA">MLA</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="card card-body border card-plain border-radius-lg ">
                    <div className="col-sm-12 d-flex justify-content-center">
                      <h3>
                        Price{" "}
                        <strong style={{ color: "green" }}>
                          $ {price.toFixed(2)}
                        </strong>
                      </h3>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default CraeteOrderForm;
