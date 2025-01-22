import React, { useState } from "react";
import './style.css';
import axios from 'axios'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password:''
    })


    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/auth/adminlogin')
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 login loginPage'>
        <div className="p-3 rounded w-25 border loginForm">
            <h2>Login Page</h2>
            <form  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" id="email"  placeholder="Enter Email" 
                    onChange={(e) => setValues({...values, email : e.target.value})} className="form-control" />
                    
                </div>
                <div>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" id="password"
                    onChange={(e) => setValues({...values, password : e.target.value})} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Login</button>
            </form>
        </div>
        </div>
    );
};

export default Login;


