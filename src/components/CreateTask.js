import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const CreateTask = () => {
    return (
        <>
            <div className="container my-4">
                <h1 className="text-center">Create task</h1>
            </div>
            <div className="text-center">
                <div className="container my-4">
                    <div class="card text-center" style={{ width: '18rem' }}>
                        <div class="card-body">

                            <div className="row">
                                <div className='col-4'>
                                    <Link class="fa-solid fa-plus" to='/addtodo'></Link>
                                </div>
                                <div className='col-6'>
                                    <h5 class="card-title">Create Task</h5>
                                </div>
                                <hr />
                            </div>

                            <div className="row">
                                <div className='col-4'>
                                    <Link class="fa-solid fa-plus" to='/createtask'></Link>
                                </div>
                                <div className='col-7'>
                                    <h5 class="card-title">Create Project</h5>
                                </div>
                                <hr />
                            </div>

                            <div className="row">
                                <div className='col-4'>
                                    <Link class="fa-solid fa-plus" to='/createteam'></Link>
                                </div>
                                <div className='col-6'>
                                    <h5 class="card-title">Create Team</h5>
                                </div>
                                {/* <hr /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTask