import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundHouse.png"
            style={{ width: "50%" }}
            alt="Zerodha Fund House logo, representing a thematic investment platform, displayed in a modern and professional web environment"
          />
          <p className=" mt-4 text-small text-muted text-center">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "50%" }}
            alt="Streak logo, symbolizing a thematic investment platform, shown in a clean and inviting digital setting"
          />
          <p className=" mt-4 text-small text-muted mt-4 text-center">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt="Smallcase logo, indicating a thematic investment platform, featured in a welcoming and informative web layout"
          />
          <p className=" mt-4 text-small text-muted">
            Bonds Trading Platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "50%" }}
            alt="Smallcase logo, indicating a thematic investment platform, featured in a welcoming and informative web layout"
          />
          <p className=" mt-4 text-small text-muted">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "50%" }}
            alt="Smallcase logo, indicating a thematic investment platform, featured in a welcoming and informative web layout"
          />
          <p className=" mt-4 text-small text-muted">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            style={{ width: "50%" }}
            alt="Smallcase logo, indicating a thematic investment platform, featured in a welcoming and informative web layout"
          />
          <p className=" mt-4 text-small text-muted">
            Thematic investment platform
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
