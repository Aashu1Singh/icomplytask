import React, { useState } from 'react';
import axios from 'axios'

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = () => {
        axios.post('http://localhost:5000/register', { username: username, password: password })
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
        <div className='container my-4'>
            <h1 className="text-center my-3">
                Welcome to Register Page
            </h1>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username </label>
                    <input type="email" className="form-control" onChange={onChangeU} id="username" name='username' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChangeP} id="password" name='password' />
                </div>
                <button type="submit" onClick={handleRegister} className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

export default Register