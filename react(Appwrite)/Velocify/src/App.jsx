import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice' 
import './App.css'
import Header from './component/header/header'
import Footer from './component/footer/footer'
import { Outlet } from 'react-router-dom';


function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
      authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}));
        }
        else {
          dispatch(logout());
        }
        setLoading(false);
        
      }
      )
      .catch((error) => {
        console.error('Error getting current user:', error);
        dispatch(logout());
      })
     
    },[])

  return !loading ?  (

    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='block w-full'>
        <Header/>
        
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
