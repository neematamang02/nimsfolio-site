import React from 'react'
import Portfolio from './pages/Portfolio';
import Aboutme from './pages/Aboutme';
import Testomonials from './pages/Testomonials';
import Navbar from './navigationbars/navbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';


function App (){
  return (
    <div className="App">
    <Navbar />
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Aboutme" element={<Aboutme />} />
      <Route path="/Testomonials" element={<Testomonials />} />
      </Routes>
      
    </div>
  )
}

export default App
