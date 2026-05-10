import { useState } from 'react'
import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from './components/Footer'
import Signup from "./components/admin/Signup"
import Signin from "./components/admin/Signin"
import './App.css'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>

      </Routes>
      <Footer />
    </>
  )
}

export default App
