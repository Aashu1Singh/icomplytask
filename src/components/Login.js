import React, { useState } from 'react';
import axios from 'axios'

const Login = () => {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self")
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    axios.defaults.withCredentials = true;

    const handleRegister = (e) => {
        e.preventDefault()
        axios.post('/login', { username: username, password: password})
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
        <div className='container'>
            <div className="container text-center my-4">
                <i className="fa-solid fa-6x fa-people-group mx-4"></i>
                <i className="fa-solid fa-6x fa-person-chalkboard mx-4"></i>
                <i className="fa-solid fa-6x fa-people-group mx-4"></i>
            </div>
            <div className="container text-center">
                <i className="fa-solid fa-input-text"></i>
            </div>

            <div className="row">
                <div className="col-4 logintext">Let's Create</div>
                <div className="col-4 logintext">Task,</div>
                <div className="col-4 logintext">Work with</div>
            </div>
            <div className="row">
                <div className="col-4 logintext">a space</div>
                <div className="col-4 logintext">Calender,</div>
                <div className="col-4 logintext">Team</div>
            </div>
            <div className="row">
                <div className="col-4 logintext">for workflow</div>
                <div className="col-4 logintext">Chat,</div>
                <div className="col-4 logintext">Online</div>
            </div>
            {/* <div className="container text-center mt-4">
                <button className="btn btn-primary btn-round-lg" style={{padding: '10px 80px'}} onClick={google}> Sign in with google</button>
            </div> */}
            <div className="container text-center mt-4">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username </label>
                        <input type="email" className="form-control" onChange={onChangeU} id="username" name='username' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={onChangeP} id="password" name='password' />
                    </div>
                    <button  onClick={handleRegister} className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="container text-center my-2">
                <span>Already have an account? </span><a href="#" style={{ textDecoration: "none" }}> Sign in</a>
            </div>
        </div>

    )
}

export default Login