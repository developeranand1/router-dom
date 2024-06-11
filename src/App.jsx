import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About'
import Contact from "./components/Contact"
import Register from './components/Register';
import Login from './components/Login';

function App() {
  

  return (
    <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
    </Routes>
   </Router>
  
     <Footer/>
    </>
  )
}

export default App
