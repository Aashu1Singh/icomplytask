import React from 'react'

const Login = () => {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self")
    }

    return (
        <div className='container'>
            <div className="container text-center my-4">
            <i class="fa-solid fa-6x fa-people-group mx-4"></i>
                <i class="fa-solid fa-6x fa-person-chalkboard mx-4"></i>
            <i class="fa-solid fa-6x fa-people-group mx-4"></i>
            </div>
            <div className="container text-center">
            <i class="fa-solid fa-input-text"></i>
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
            <div className="container text-center mt-4">
                <button className="btn btn-primary btn-round-lg" style={{padding: '10px 80px'}} onClick={google}> Sign in with google</button>
            </div>
            <div className="container text-center my-2">
                <span>Already have an account? </span><a href="#" style={{textDecoration: "none"}}> Sign in</a>
            </div>
        </div>

    )
}

export default Login