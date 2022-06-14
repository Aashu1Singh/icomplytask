import { useEffect } from 'react';
import './App.css';
import Addtodo from './components/Addtodo';
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
import Main from './components/Main';

function App() {

  const [user, setUser] = useState(() => false)

  useEffect(() => {

    axios.get(`http://localhost:5000/login`).then((response) => {
      console.log(response);
      // setUser(response.data.loggedIn);
      console.log(`app useEffect ${user}`);

      if (response.data.loggedIn == true) {
        setUser(true)
        console.log(user);
      } else {
        setUser(false)

      }
    })
  })

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={<Main />}>
          </Route>
          <Route path="/login"
            element={<Login user={user} setUser={setUser} />}>
          </Route>
          <Route path="/addtodo"
            element={user ? <Addtodo /> : <Navigate to="/" />}>
          </Route>
          <Route path="/register"
            element={<Register />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
