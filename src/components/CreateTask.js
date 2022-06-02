import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const CreateTask = () => {
    return (
        <div className='container'>
            <div className="row my-4">
                <div className="col-2">
                    <i className="fa-solid fa-2x fa-record-vinyl"></i>
                </div>
                <div className="col-6 my-4">
                    <h1 className="text-center">Create task</h1>
                </div>
                <div className="col-4">
                <i className="fa-solid fa-4x fa-ellipsis"></i>
                </div>
            </div>

            <div className="text-center">
                <div className="container my-4">
                    <div className="card text-center " style={{ width: '18rem' }}>
                        <div className="card-body">

                            <div className="row">
                                <div className='col-4'>
                                    <Link className="fa-solid fa-plus" to='/addtodo'></Link>
                                </div>
                                <div className='col-6'>
                                    <h5 className="card-title">Create Task</h5>
                                </div>
                                <hr />
                            </div>

                            <div className="row">
                                <div className='col-4'>
                                    <Link className="fa-solid fa-plus" to='/createtask'></Link>
                                </div>
                                <div className='col-7'>
                                    <h5 className="card-title">Create Project</h5>
                                </div>
                                <hr />
                            </div>

                            <div className="row">
                                <div className='col-4'>
                                    <Link className="fa-solid fa-plus" to='/createteam'></Link>
                                </div>
                                <div className='col-6'>
                                    <h5 className="card-title">Create Team</h5>
                                </div>
                                {/* <hr /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTask