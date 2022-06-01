import React from 'react'

const Login = () => {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self")
    }

    return (
        <div>
            <div className="container">
                <button className="btn btn-light" onClick={google}> login</button>
            </div>
        </div>

    )
}

export default Login