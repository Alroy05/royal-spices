import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import History from './components/History';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Recipe from './components/Recipe';
import TestimonialsSection from './components/TestimonialsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Articles from './components/Articles';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      <Navbar isHomePage={isHomePage} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <History />
            <Carousel />
            <Recipe />
            <TestimonialsSection />
            <Contact />
          </>
        } />
        <Route path="/products/:productName" element={<Articles />} />
        <Route
          path="/recipes/*"
          element={<Navigate to="/products/achari-masala" replace />}
        />
      </Routes>
      <Footer />
      <ScrollToTop smooth class="scroll-to-top-button" color='darkgreen'/>
    </div>
  );
}

export default App;