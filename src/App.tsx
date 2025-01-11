import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Partners from './pages/Partners';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/partners" element={<Partners />} />
          <Route 
            path="/exchange" 
            element={
              <RedirectComponent url="https://www.odyssey.trade/en_US/register?inviteCode=EAATH" />
            } 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const RedirectComponent = ({ url }: { url: string }) => {
  React.useEffect(() => {
    window.location.href = url;
  }, [url]);
  return null;
};

export default App;