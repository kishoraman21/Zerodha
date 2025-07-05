import React from "react";

function RightSection({ imageURl, topic, description, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{topic}</h1>
          <p>{description}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
