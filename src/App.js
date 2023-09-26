import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

export default function App() {
  let activeClassName = "nav-active";
  return (
    <BrowserRouter>
      <header>
        <h1>Hello World</h1>
      </header>
      <nav>
      <NavLink to="" className={({ isActive }) => isActive && activeClassName}>Home</NavLink>
      <NavLink to="about" className={({ isActive }) => isActive && activeClassName}>About</NavLink>
      <NavLink to="contact" className={({ isActive }) => isActive && activeClassName}>Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="*" element={<Error/>} />

      </Routes>
    </BrowserRouter>
  );
}
