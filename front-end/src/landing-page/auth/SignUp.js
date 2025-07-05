import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {ToastContainer , toast} from "react-toastify";

function SignUp() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email:"",
    password:"",
    username:"",
  });
  const {email, password, username} = inputValue;

  const handleOnChange = (e) =>{
    const {name , value} = e.target;
    setInputValue({
      ...inputValue,
      [name]:value,
    });
  }

  const handleError = (err)=>
    toast.error(err, {
      position:'bottom-left',
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position:"bottom-right",
    });

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const {data} = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue
        },
        {withCredentials:true}
      );
      const {success, message} = data;
      if(success){
        handleSuccess(message);
        setTimeout(()=>{
        window.location.replace("http://localhost:3000/")
        }, 1000);
      }else{
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }

    setInputValue({
      ...inputValue,
      email:"",
      password:"",
      username:"",
    });
  };

  return(
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <h2 className="text-center mb-4 fw-bold text-primary">Create Account</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input 
                    className="form-control form-control-lg"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={handleOnChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="username" className="form-label fw-semibold">
                    Username
                  </label>
                  <input 
                    className="form-control form-control-lg"
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    placeholder="Enter your username"
                    onChange={handleOnChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold">
                    Password
                  </label>
                  <input 
                    className="form-control form-control-lg"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={handleOnChange}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg w-100 mb-3 fw-semibold"
                >
                  Create Account
                </button>

                <div className="text-center">
                  <span className="text-muted">
                    Already have an account?{" "}
                    <Link to="/login" className="text-decoration-none fw-semibold">
                    <br></br>
                      Log In 
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default SignUp;