import './App.css';
import Hero from './components/Hero';
import History from './components/History';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Carousel from './components/Carousel';
import Recipe from './components/Recipe';
import TestimonialsSection from './components/TestimonialsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col">
          <Navbar />
          <Hero/>
          <History />
          <Carousel />
          <Recipe />
          <TestimonialsSection />
          <Contact />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
