import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/mainlayout';
import Home from './pages/home';
import About from './pages/about';
import Sweaters from './pages/sweaters';
import Contact from './pages/contact';
export default function App() {

  return (
    <BrowserRouter>
   <Routes>
    <Route element={<MainLayout/>}>
    <Route path='/' element={<Home/>} />
    <Route path='/sweaters' element={<Sweaters/>} />
    <Route path='/about' element={<About/>} />
     <Route path='/contact' element={<Contact/>} />
    </Route>
   </Routes>
    </BrowserRouter>


 
  )
}
