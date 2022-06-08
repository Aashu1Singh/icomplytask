import React from 'react'
import axios from 'axios';

const ShowTodo = (props) => {
    const deleteTask = (id)=>{
        // console.log(id);
        axios.delete('http://localhost:5000/addtodo',{ data: {
            id: id
        }}).then((res) => {
            console.log("Item deleted");            
        })
        // console.log(props.todos);
        props.setTodos(props.todos.filter((todo)=> {return todo.id !=id}))
        // props.setTodos(props.todos)
        // console.log(props.todos);
        
    }
    return (
        <div className="card col-md-3 mx-2 my-2" >
            <div className="card-body">
                <h4 className="card-title">{props.todo.task}</h4>
            <button className="fa-solid fa-trash-can mx-2" type="submit" onClick={()=>deleteTask(props.index)}></button>
            <button className="fa-solid fa-pen-to-square mx-2"></button>
            </div>
        </div>
    )
}

export default ShowTodo