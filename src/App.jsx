import React, { use, useEffect } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Player from './pages/Player'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
const App = () => {

  const navgate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in:", user);
        navgate('/');
      } else {
        console.log("No user is signed in.");
        navgate('/login');
      }
    });
  // This effect is for checking user authentication state, you can modify it as needed
  // For example, you can redirect to login if no user is signed in
  // eslint-disable-next-line react-hooks/exhaustive-deps 
  },[])
  return (
    <>
    <div id='appdiv' className='w-auto h-screen bg-black text-white '>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={  <Home/>}/>
        <Route path='/login' element={  <Login/>}/>
        <Route path='/player/:id' element={  <Player/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App