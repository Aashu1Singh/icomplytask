import { useEffect } from 'react';
import './App.css';
import { GoogleLogin } from 'react-google-login';
import Addtodo from './components/Addtodo';
import CreateTask from './components/CreateTask';
// import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './components/Login';
import { useState } from 'react';
import Register from './components/Register';



function App() {

  // const user = false;

  const [user, setUser] = useState(false)

  useEffect(() => {

    axios.get(`http://localhost:5000/login`).then((response) => {
      console.log(response);
      if (response.data.loggedIn == true) {

        setUser(response.data.user[0].username)
      }

    })

    // console.log(res);



  }, [])
  //  console.log(user);



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={<Login />}>
          </Route>
          <Route path="/login"
            element={user ? <Navigate to="/" /> : <Login />}>
          </Route>
          <Route path="/addtodo"
            element={user ? <Addtodo /> : <Navigate to="/login" />}>
          </Route>
          <Route path="/register"
            element={user ? <Register /> : <Navigate to="/login" />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
