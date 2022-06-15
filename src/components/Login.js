import React, { useState } from 'react';
import axios from 'axios'
import { Link, Navigate, useNavigate  } from 'react-router-dom';

const Login = (props) => {
    const navigate  = useNavigate();
    let { user, setUser } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    axios.defaults.withCredentials = true;

    const handleRegister = (e) => {

        e.preventDefault()
        axios.post('/login', { username: username, password: password })
            .then((res) => {
                // console.log(res.status)
                console.log("Response from /login");
                console.log(`login ${user}`);
                if (res.status == 200) {
                    setUser(true);
                    console.log(`login ${user}`);
                    navigate("/addtodo")
                }
            })
    }
    const onChangeU = (e) => {
        setUsername(e.target.value)
    };
    const onChangeP = (e) => {
        setPassword(e.target.value)
    };

    return (
        <div className='container LoginBox'>
            <div className="container mt-4">
                <div>
                    <h2 className="text-center mt-3">
                        Log In to iTodo
                    </h2>
                </div>
                <form className='formDiv'>
                    <div className="my-1">
                        {/* <label htmlFor="exampleInputEmail1" className="form-label">Username </label> */}
                        <input type="email" className="form-control inputText" required={true} onChange={onChangeU} id="username" name='username' aria-describedby="emailHelp" placeholder='Username' />
                    </div>
                    <div className="mb-2">
                        {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
                        <input type="password" className="form-control inputText" onChange={onChangeP} id="password" name='password' placeholder='Password' required={true} />
                    </div>
                    <button onClick={handleRegister} className="btn btn-dark loginBtn" type="submit" >Log In</button>
                </form>
                <div className="row my-4">
                    <div className="col-3">
                        <i className="fa-solid fa-2x fa-note-sticky"></i>
                    </div>
                    <div className="col-3">
                        <i className="fa-solid fa-2x fa-book"></i>
                    </div>
                    <div className="col-2">
                        <i className="fa-brands fa-2x fa-evernote"></i>
                    </div>
                    <div className="col-2 mx-4">
                        <i className="fa-solid fa-2x fa-circle-nodes"></i>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login