import React, { useState } from "react";
import "./css/Login.css";
import { useNavigate } from "react-router-dom";
import HTTP from "../axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleCl = () => navigate("/sign-up");

  const hangleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
    HTTP.post('http://localhost:3000/user/login',{email, password})
    .then(function (response) {
      console.log(response);
      if(response.data.success){
        navigate("/dashboard/news");
      }else{
        alert(response.data.error)
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    // if (email === "superuser" && password === "password") {
    //   navigate("/dashboard/news");
    // } else {
    //   alert("Wrong username or password");
    // }
  };
  return (
    <div className="main-div">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10">
        <div className="card d-flex mx-auto my-5">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12 c1">
              <div className="row justify-content-center">
                <div className="w-75 mx-md-5 mx-1 mx-sm-2 mb-5 mt-4 px-sm-5 px-md-2 px-xl-1 px-2">
                  <h1 className="wlcm">Welcome to Farmer's portal</h1>{" "}
                  <span className="sp1">
                    {" "}
                    <span className="px-3 bg-danger rounded-pill"></span>{" "}
                    <span className="ml-2 px-1 rounded-circle"></span>{" "}
                    <span className="ml-2 px-1 rounded-circle"></span>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12 c2 px-5 pt-5">
              <form onSubmit={hangleLogin} name="myform" className="px-5 pb-5">
                <div className="d-flex">
                  <h3 className="font-weight-bold">Log in</h3>
                </div>{" "}
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="useremakil"
                  placeholder="User"
                />{" "}
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="passw"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className="text-white text-weight-bold bt"
                >
                  Login
                </button>
                <button
                type="button"
                  onClick={handleCl}
                  className="text-white text-weight-bold bt1"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
