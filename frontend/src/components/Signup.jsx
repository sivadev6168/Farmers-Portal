import React, { useState } from "react";
import "./css/Signup.css";
// import axios from "axios";
import HTTP from "../axios";
import { useNavigate } from 'react-router-dom';
import PasswordChecklist from "react-password-checklist"

const Signup = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("")
  const [validPassword, setValidPassword] = useState(false)

  const navigate = useNavigate();
  const handleCl = () => navigate('/');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log({email, number, password})
    if(email.length < 5) {
      alert('Please enter a username with 5 char')
      return
    }
    var phone = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/
    if(!phone.test(number)){
      alert('enter a valid phone number')
      return
    }
    if(!validPassword) return
    HTTP.post('http://localhost:4000/user/signin',{email, number, password})
    .then(function (response) {
      console.log(response);
      if(response.data.success){
        navigate('/')
      }else{
        alert('unexpected error')
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  return (
    <div className="signup-body">
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Farmer's Portal</h3>
                <p>Register Here</p>
                <form onSubmit={handleSignup} className="requires-validation p-2" noValidate>
                  <div className="col-md-12 my-3">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="col-md-12 my-3">
                    <input
                      className="form-control"
                      type="number"
                      pattern="[789][0-9]{9}"
                      name="number"
                      placeholder="Phone Number"
                      required
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  <PasswordChecklist style={{visibility: validPassword ? 'hidden' : 'visible', color:'white'}}
                    rules={["minLength","specialChar"]}
                    minLength={5}
                    value={password}
                    onChange={(isValid) => {setValidPassword(isValid); console.log(isValid)}}
                    iconComponents={{InvalidIcon: '*'}}
                  />
                  </div>
                  <div className="form-button mt-3 text-center">
                    <button id="register" type="submit" className="signup-btn">
                      Register
                    </button>
                  </div>
                  <div className="form-button mt-3 text-center">
                    <button onClick={handleCl} id="login" type="submit" className="signup-btn1">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
