import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ShowTodo from './ShowTodo';

const Addtodo = () => {
    const [task, setTask] = useState("");
    const [name, setName] = useState("test");
    const [todos, setTodos] = useState([]);

    const addTask = (e) => {
        // e.preventDefault()
        axios.post('http://localhost:5000/addtodo', { name: name, task: task }).then(() => {
            console.log("success");

        });

    }

    useEffect(() => {
        axios.get('http://localhost:5000/addtodo').then((res) => {
            setTodos(res.data)
            console.log(todos);
        })

    }, [])


    return (
        <>
            <div className="container">
                <div className="row my-4">
                    <div className="col-2 text-center" style={{ marginTop: "36px" }}>
                        <i className="fa-solid fa-2x fa-record-vinyl"></i>
                    </div>
                    <div className="col-6 my-4">
                        <h1 className="text-center">Create task</h1>
                    </div>
                    <div className="col-4 text-center" style={{ marginTop: "25px" }}>
                        <i className="fa-solid fa-4x fa-ellipsis"></i>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-4">
                        <p className='logintext'>App Design</p>
                    </div>
                    <div className="col-8 learnmore">
                        <a href="#" className=' text-center'>Learn more</a>
                    </div>
                </div>
            </div>
            <div className='container my-4'>
                <h2 className="">Add Task topic</h2>
                <form>
                    <div className="mb-3">
                        {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" onChange={(event) => { setTask(event.target.value) }} style={{ backgroundColor: "#8c99a470" }}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg" onClick={addTask} style={{ padding: "7px 40px" }}>Create Now</button>
                </form>
            
            <div className="row my-4">
                <h1 className="text-center">
                    Task to complete
                </h1>
                {todos.map((todo) => {
                    return <ShowTodo todo={todo} key={todo.id} index={todo.id} todos={todos} setTodos={setTodos} /> 
                    
                })}
            </div>
            </div>
            
        </>
    )
}

export default Addtodo