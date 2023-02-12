import React, {useState} from 'react';
import './css/Signup.css';



const Signup = () => {

    const [name, setname] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className='signup-body'>
    <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Farmer's Portal</h3>
                        <p>Register Here</p>
                        <form className="requires-validation p-2" noValidate>

                            <div className="col-md-12 my-3">
                               <input className="form-control" type="text" name="name" placeholder="Name" required/>
                            </div>

                            <div className="col-md-12 my-3">
                                <input className="form-control" type="number" name="number" placeholder="Phone Number" required/>
                            </div>

                           <div className="col-md-12">
                              <input className="form-control" type="password" name="password" placeholder="Password" required/>
                           </div>
                            <div className="form-button mt-3 text-center">
                                <button id="submit" type="submit" className="signup-btn">Register</button>
                            </div>
                            <div className="form-button mt-3 text-center">
                                <button id="submit" type="submit" className="signup-btn1">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup