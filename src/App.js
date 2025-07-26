import React from 'react';
import './App.css';
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about'


function App() {
  return (
    <>
    <div className="shade">
      <div className="shader1"></div>
      <Nav/>
      <Home/>
      
    </div>
      <About/>
    </>
    
  );
}

export default App;
