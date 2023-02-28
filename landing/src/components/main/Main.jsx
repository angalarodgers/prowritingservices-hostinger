import React, { useEffect, useState } from "react";
import "./Main.scss";
import axios from "axios";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Main = () => {
  const [wrd, setWrd] = useState(275);
  const [prs, setPrs] = useState(25);
  const [err, setErr] = useState("");
  const [inputs, setInputs] = useState({
    paper_type: "",
    academic_level: "",
    dt: "",
    tm: "",
    pages: 1,
    price: prs,
    words: wrd,
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };

  useEffect(() => {
    if (inputs.price < 1) {
      setErr("Value cannot be less");
      setInputs({ ...prev, pages: 1 });
    } else if (inputs.pages === 1) {
      setWrd(275);
    } else {
      setWrd(275 * inputs.pages);
      setPrs(inputs.pages * 25);
    }
  }, [inputs.pages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.paper_type.length === 0) {
      setErr("Paper Type Required!");
    } else if (inputs.academic_level.length === 0) {
      setErr("Academic Level Required!");
    } else if (inputs.dt.length === 0) {
      setErr("Deadline Date Required!");
    } else if (inputs.price.length === 0) {
      setErr("Error on Price!");
    } else {
      setErr("");
      localStorage.setItem("init_order", JSON.stringify(inputs));
      setSuccess("Registered Successfully!");
      await sleep(3000);
      navigate("http://localhost:5174/login");
    }
  };
  return (
    <div
      className="jumbotron ui-hero ui-mh-50vh ui-bg-cover ui-bg-fixed ui-bg-overlay-container"
      style={{ backgroundColor: "#F2F2F2" }}
    >
      <div className="ui-bg-overlay" style={{ backgroundColor: "#F2F2F2" }} />
      <div className="container flex-shrink-1 ">
        <div className="row justify-content-between">
          <div className="col-lg-8 col-xl-6 text-lg-left text-center text-black ">
            <h1 className="tx-40 tx-bold mb-4" style={{ color: "#737373" }}>
              Essay Writing Services
            </h1>
            <div className="lead mb-5" style={{ color: "#737373" }}>
              <h4>Looking for an expert to work on your essay/assignment</h4>
              we have a team of experienced writers to assist you 24/7 No more.
              Share paper instructions with our writers. Sit back and wait for
              the complete paper.
            </div>

            <button
              className="btn btn-warning"
              style={{ color: "white", borderRadius: "10px" }}
            >
              Order My Paper
            </button>
          </div>
          <div className="col-lg-4 text-lg-left text-center ">
            <div
              className="card border-0 "
              style={{
                backgroundColor: "#F2F2F2",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderRadius: "15px",
              }}
            >
              <div className="card-body">
                <h6 className="d-flex justify-content-center">
                  Place your order
                </h6>
                <form className="mb-3">
                  <div className="form-group">
                    <label className="form-label">Type of paper</label>
                    <select
                      name="paper_type"
                      id="paper_type"
                      className="form-control"
                      onChange={handleChange}
                    >
                      <option value="">Select...</option>
                      <option value={"Essay (Any Type)"}>
                        Essay (Any Type)
                      </option>
                      <option value={"Report"}>Report</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Academic Level</label>
                    <select
                      name="academic_level"
                      id="paper_type"
                      className="form-control"
                      onChange={handleChange}
                    >
                      <option value="">Select...</option>
                      <option value={"High School"}>High School</option>
                      <option value={"College"}>College</option>
                      <option value={"Undergraduate"}>Undergraduate</option>
                      <option value={"Master"}>Master</option>
                      <option value={"PhD"}>PhD</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-sm-6">
                        {" "}
                        <label className="form-label">Deadline</label>
                        <input
                          type="date"
                          name="dt"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-sm-6">
                        {" "}
                        <label className="form-label">.</label>
                        <input
                          type="time"
                          name="tm"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-sm-6">
                        <label className="form-label">Pages</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="1"
                          name="pages"
                          onChange={handleChange}
                          value={inputs.pages}
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label">Words</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="275"
                          name="words"
                          onChange={handleChange}
                          value={wrd}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group d-flex justify-content-center">
                    <p>
                      Price : $ <strong>{prs}</strong>
                    </p>
                  </div>
                  {<p>{err}</p> && <p style={{ color: "red" }}>{err}</p>}
                  <button
                    type="submit"
                    className="btn btn-warning btn-block"
                    style={{ color: "white", borderRadius: "10px" }}
                    onClick={handleSubmit}
                  >
                    Order Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
