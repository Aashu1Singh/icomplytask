import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Addtodo from './Addtodo';


const CreateTask = () => {
    return (
        <Router>
            <Switch>
                <div className="container text-center my-4">
                    <div class="card" style={{ width: '18rem' }}>
                        <div class="card-body">

                            <Route path="/addtodo">
                                <Addtodo />
                           
                            <div className="row">
                                <div className='col-4'>
                                    <Link class="fa-solid fa-plus" to='/addtodo'></Link>
                                </div>
                                <div className='col-6'>
                                    <h5 class="card-title">Create Task</h5>
                                </div>
                                <hr />
                            </div>
                            </Route>
                            <div className="row">
                                <div className='col-4'>
                                    <link class="fa-solid fa-plus" to='/addtodo'></link>
                                </div>
                                <div className='col-7'>
                                    <h5 class="card-title">Create Project</h5>
                                </div>
                                <hr />
                            </div>

                            <div className="row">
                                <div className='col-4'>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                                <div className='col-6'>
                                    <h5 class="card-title">Create Team</h5>
                                </div>
                                {/* <hr /> */}
                            </div>

                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </Switch>
        </Router >
    )
}

export default CreateTask