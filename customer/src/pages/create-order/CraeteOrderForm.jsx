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
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
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
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
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
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
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
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
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
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
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
