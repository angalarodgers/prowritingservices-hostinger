import React from "react";

const comments = [
  {
    id: 1,
    text: "The writing services provided by this company are simply amazing! They always deliver high-quality work that exceeds my expectations.",
    author: "John Doe",
  },
  {
    id: 2,
    text: "I was skeptical at first, but I gave this company a chance and I was blown away by their writing services. Highly recommended!",
    author: "Jane Smith",
  },
  {
    id: 3,
    text: "I've been using this company's writing services for a while now, and I've never been disappointed. They are truly the best in the business.",
    author: "Bob Johnson",
  },
];

const Slider = () => {
  return (
    <div id="slider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {comments.map((comment, index) => (
          <div
            key={comment.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <p className="carousel-text">
              <small>{comment.text}</small>
            </p>
            <p className="carousel-author">{comment.author}</p>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#slider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#slider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
