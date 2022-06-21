import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

import Home from './pages/Home';
import Earthquake from './pages/Earthquake';
import Covid from './pages/Covid';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/earthquake" element={<Earthquake />} />
        <Route path="/covid" element={<Covid />} />
      </Routes>
    </Router>
  );
}

export default App;
