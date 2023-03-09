import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const OrderInit = () => {
  const [wrd, setWrd] = useState(275);
  const [prs, setPrs] = useState(13);
  const [err, setErr] = useState("");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 });
  const [inputs, setInputs] = useState({
    email: "",
    paper_type: "",
    academic_level: "",
    dt: "",
    tm: "",
    pages: 1,
    price: prs,
    words: wrd,
    time_left: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (inputs.dt.length > 0) {
      const targetDate = new Date(inputs.dt);
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeDiff = targetDate - now;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setTimeLeft({ days, hours });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [inputs.dt]);

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
    if (inputs.email.length === 0) {
      toast.error("User Email Required!");
    } else if (inputs.paper_type.length === 0) {
      toast.error("Paper Type Required!");
    } else if (inputs.academic_level.length === 0) {
      toast.error("Academic Level Required!");
    } else if (inputs.dt.length === 0) {
      toast.error("Deadline Date Required!");
    } else if (inputs.price.length === 0) {
      toast.error("Error on Price!");
    } else {
      setErr("");

      try {
        const res = await axios.post(
          "https://api.prowritingservice.net/api/auth/placeInitOrder",
          inputs
        );
        console.log(res);
        if (res.status === 200) {
          toast.success("Registered Successfully!");
          localStorage.setItem("init_order", JSON.stringify(inputs));

          //window.location.href = "http://localhost:5174/";
        }
      } catch (error) {
        toast.error("Error Ocured!");
        console.log(error);
      }
    }
  };

  return (
    <div className="col-lg-4 ms-auto mt-lg-0 mt-4 mb-5" style={{ top: "0px" }}>
      <div className="card">
        {/* <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
        <a className="d-block blur-shadow-image">
          <img
            src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="img-colored-shadow"
            className="img-fluid border-radius-lg"
          />
        </a>
      </div> */}
        <div className="card-body text-center">
          <h5 className="font-weight-normal">
            <a href="javascript:;">Create your order</a>
          </h5>
          <p className="mb-0">
            <form action="">
              <div className="input-group input-group-static">
                <label>Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={inputs.email}
                />
              </div>
              <div className="input-group input-group-static">
                <label>Type Of Paper</label>
                <select
                  name="paper_type"
                  id="paper_type"
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Type Of Paper
                  </option>

                  <option value={"Essay (Any Type)"}>Essay (Any Type)</option>
                  <option value={"Report"}>Report</option>
                  <option value="Admission Essay">Admission Essay</option>
                  <option value="Annotated Bibliography">
                    Annotated Bibliography
                  </option>
                  <option value="Argumentative">Argumentative essay</option>
                  <option value="Argumentative essay">Article Review</option>
                  <option value="Article Writing">Article Writing</option>
                  <option value="Assignment (Any type)">
                    Assignment (Any type)
                  </option>
                  <option value="Book/Movie Review">Book/Movie Review</option>
                  <option value="Business Plan">Business Plan</option>
                  <option value="Business Proposal">Business Proposal</option>
                  <option value="Capstone">Capstone Project</option>
                  <option value="Case">Case Study</option>
                  <option value="Coursework">Coursework</option>
                  <option value="Creative">Creative Writing</option>
                  <option value="Critical">Critical Thinking / Review</option>
                  <option value="Discussion">Discussion Post</option>
                  <option value="Essay (any type)">Essay (any type)</option>
                  <option value="Homework">Homework </option>
                  <option value="Lab">Lab Report</option>
                  <option value="Letter">Letter/Memo</option>
                  <option value="Literature">Literature Review</option>
                  <option value="Marketing">Marketing Plan</option>
                  <option value="Multi">Multi-choice questions</option>
                  <option value="Other">Other</option>
                  <option value="Outline">Outline</option>
                  <option value="">
                    PowerPoint PowerPoint Presentation (with speaker notes)
                  </option>
                  <option value="Reaction">Reaction Paper</option>
                  <option value="Reflective">Reflective Writing</option>
                  <option value="Research">Research Paper</option>
                  <option value="Research">Research Proposal</option>
                  <option value="Script">Script writing</option>
                  <option value="Short">Short Answer Questions</option>
                  <option value="SWOT">SWOT Analysis</option>
                  <option value="Term">Term Paper</option>
                  <option value="Thesis">Thesis/Dissertation</option>
                </select>
              </div>

              <div className="input-group input-group-static">
                <label>Academic Level</label>
                <select
                  name="academic_level"
                  id="academic_level"
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="">Select Academic Level...</option>
                  <option value={"High School"}>High School</option>
                  <option value={"College"}>College</option>
                  <option value={"Undergraduate"}>Undergraduate</option>
                  <option value={"Master"}>Master</option>
                  <option value={"PhD"}>PhD</option>
                </select>{" "}
              </div>
              <div className="row">
                <div className="col">
                  <div className="input-group input-group-static ">
                    <label>Pages</label>
                    <input
                      className="form-control"
                      type="number"
                      name="pages"
                      onChange={handleChange}
                      value={inputs.pages}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="input-group input-group-static">
                    <label>Words</label>
                    <input
                      className="form-control"
                      type="text"
                      name="words"
                      onChange={handleChange}
                      value={wrd}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-group input-group-static">
                    <label>Deadline</label>
                    <input
                      className="form-control"
                      type="datetime-local"
                      name="dt"
                      onChange={handleChange}
                      value={inputs.dt}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group input-group-static mb-1 ">
                    <label>Time Left</label>
                    <input
                      className="form-control"
                      type="text"
                      onChange={handleChange}
                      value={
                        timeLeft.days + " Days and " + timeLeft.hours + " Hours"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="input-group input-group-static mb-1 d-flex justify-content-center">
                <label>
                  Estimate Price :{" "}
                  <strong style={{ color: "green" }}>${prs}</strong>
                </label>
              </div>
            </form>
          </p>
          <button
            type="button"
            className="btn bg-warning btn-sm mb-0 mt-3"
            onClick={handleSubmit}
            style={{ color: "white" }}
          >
            Place Your Order
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default OrderInit;
