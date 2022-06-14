import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = () => {
        axios.post('/register', { username: username, password: password })
            .then((res) => {
                console.log("User Registered");
            })
    }
    const onChangeU = (e) => {
        // console.log(e.target.value);
        setUsername(e.target.value)
    };
    const onChangeP = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value)
    };

    return (
        <div className='container  LoginBox'>
            <h1 className="text-center my-3">
                Register Yourself
            </h1>
            <form className="formDiv">
                <div className="my-1">
                    {/* <label for="exampleInputEmail1" className="form-label"> </label> */}
                    <input type="email" className="form-control inputText" required={true} onChange={onChangeU} id="username" name='username' aria-describedby="emailHelp" placeholder='Username' />
                </div>
                <div className="mb-2">
                    {/* <label for="exampleInputPassword1" className="form-label"></label> */}
                    <input type="password" className="form-control inputText" required={true} onChange={onChangeP} id="password" name='password' placeholder='Password' />
                </div>
                <Link type="submit" onClick={handleRegister} className="btn btn-dark registerBtn" to="/login">Register</Link>
            </form>
        </div>
    )
}

export default Register