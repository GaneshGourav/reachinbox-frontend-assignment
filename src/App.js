import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import Sidebar from './Components/sidebar';
import Home from './Components/Home';
import { Route } from 'react-router-dom';
import MainRoutes from './Components/mainRoutes';
import { useState } from 'react';


function App() {
  return (
    <div className="App 
    ">
    
      {/* <Login/> */}
   
      <div className='flex'>
      
      <Sidebar/>
      <MainRoutes/>
      
      </div>
      
      
    
    </div>
  );
}

export default App;
