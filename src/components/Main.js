import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
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
            <div className="row my-4">
                <div className="col-12 text-center ">
                    <Link className="btn btn-dark btn-lg" to='/register' >Register here</Link>
                </div>
                <div className="container text-center my-3">
                    <span>Already have an account? </span><Link to="/login" style={{ textDecoration: "none" }}> Log In</Link>
                </div>
            </div>
        </div>
    )
}

export default Main