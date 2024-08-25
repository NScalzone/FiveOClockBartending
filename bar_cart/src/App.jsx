import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import About from './pages/about';
import Pricing from './pages/pricing';
import Contact from './pages/contact';
import Services from './pages/services';
import './App.css'


function App(){
  return ( 
  <>
      
      <div className='container'>
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
     
  </>
  )
}

export default App