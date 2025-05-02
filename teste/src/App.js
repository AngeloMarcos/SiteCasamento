// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import Gallery   from './components/Gallery';
import GuestList from './components/GuestList';
import GiftList  from './components/GiftList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><Gallery /></>} />
        <Route path="/convidados" element={<GuestList />} />
        <Route path="/presentes"   element={<GiftList  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
