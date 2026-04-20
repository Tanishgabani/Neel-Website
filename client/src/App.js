import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './styles/global.css';

// Layout
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import { LiIonBattery } from './pages/LiIonBattery';
import Products from './pages/Products';
import BatteryRecycling from './pages/BatteryRecycling';
import { SdgGoals, Contact, NotFound } from './pages/OtherPages';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import Admin from './pages/Admin';
import BlogForm from './pages/BlogForm';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/li-ion-battery" element={<LiIonBattery />} />
              <Route path="/products" element={<Products />} />
              <Route path="/battery-recycling" element={<BatteryRecycling />} />
              <Route path="/sdg-goals" element={<SdgGoals />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/blog/new" element={<BlogForm />} />
              <Route path="/admin/blog/edit/:id" element={<BlogForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
