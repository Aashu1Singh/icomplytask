import { useEffect } from 'react';
import './App.css';
import { GoogleLogin } from 'react-google-login';
import Addtodo from './components/Addtodo';
import CreateTask from './components/CreateTask';
// import { GoogleLogin } from '@react-oauth/google';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './components/Login';
import { useState } from 'react';



function App() {

  const user = false;

  //  const [user, setUser] =  useState(null)
  
  // useEffect(() => {
    
  // const getUser = ()=>{
  //      fetch("http://localhost:5000/auth/login/success", {
  //        method: "GET",
  //        credentials: "include",
  //        headers: {
  //          Accept : "application/json",
  //          "Content-Type": "application/json",
  //          "Access-Control-Allow-Credentials": true,
  //        }
  //      }).then((Response)=>{
  //        if(Response.status === 200) return Response.json()
  //        throw new Error("authentication has been failed")
  //      }).then(resObject=>{
  //        setUser(resObject.user)
  //      }).catch(err=>{
  //        console.log(err);
         
  //      })
  // }
  // getUser()
  // }, [])
  //  console.log(user);
   


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/" /> : <CreateTask />}
          </Route>
          <Route exact path="/login">
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/addtodo">
            {user ? <Redirect to="/" /> : <Addtodo />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
