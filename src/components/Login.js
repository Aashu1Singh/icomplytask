import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    axios.defaults.withCredentials = true;

    const handleRegister = (e) => {

        e.preventDefault()
        axios.post('/login', { username: username, password: password })
            .then((res) => {
                console.log("User Registered");
                props.setUser((prev) => {

                    console.log(props.user);
                    props.setUser(!prev);
                    console.log(props.user);

                })
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
        <div className='container'>

            {/* <div className="container text-center mt-4">
                <button className="btn btn-primary btn-round-lg" style={{padding: '10px 80px'}} onClick={google}> Sign in with google</button>
            </div> */}
            <div className="container text-center mt-4">
                <h1 className="text-center my-3">
                    Welcome to Login Page
                </h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username </label>
                        <input type="email" className="form-control" onChange={onChangeU} id="username" name='username' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={onChangeP} id="password" name='password' />
                    </div>
                    <Link onClick={handleRegister} className="btn btn-primary" to='/addtodo'>Log In</Link>
                </form>
            </div>

        </div>

    )
}

export default Login