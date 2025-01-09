import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <div style={{ padding: '20px' }}>
          <Routes>
            {/* Correct way to pass components to the route */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h2>About Page</h2>} />
            <Route path="/services" element={<h2>Services Page</h2>} />
            <Route path="/contact" element={<h2>Contact Page</h2>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
