import React from "react";
import { Link ,useNavigate } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5 ">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p className='mb-5 mt-3'>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button type="submit"
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free <Link to={"/signup"}></Link>
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
