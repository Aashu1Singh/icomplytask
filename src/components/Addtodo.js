import React from 'react'
import { useState, useEffect , useRef} from 'react'
import axios from 'axios'
import ShowTodo from './ShowTodo';

const Addtodo = () => {
    const [task, setTask] = useState("");
    const [name, setName] = useState("test");
    const [todos, setTodos] = useState([]);
    const [editId , setEditId] = useState("")
    const [editTask, setEditTask] = useState("")

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

    const ref = useRef(null)
    const refClose = useRef(null)

    const updateNote = (id) => {
        console.log(id);
        setEditId(id)        
        ref.current.click();
    }

    const handleClick = (e)=>{ 
        // console.log(editTask);
         axios.put('http://localhost:5000/addtodo',{ data: {
            id: editId,
            task: editTask
        }}).then((res) => {
            console.log("Item updated");            
        })
        // todos.map((todo)=> {
        //     console.log(todo);
        //     // console.log(editId);
            
        //     if(todo.id == editId){
        //         console.log(todo.task);
        //         setTodos((prev)=>{
        //             console.log(prev)
        //         })
        //         console.log(todo.task);
            
        //     }
        // })
        refClose.current.click();
    }

    const onChange = (e)=>{
        // console.log(e.target.value);
        setEditTask(e.target.value) 
    }
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
                    return <ShowTodo todo={todo} key={todo.id} updateNote={updateNote} index={todo.id}  todos={todos} setTodos={setTodos} /> 
                    
                })}
            </div>
            </div>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Task</label>
                                    <input type="text" className="form-control" id="etask" value={editTask} name="etask"  aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button  onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    )
}

export default Addtodo