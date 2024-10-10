import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import SearchResults from './pages/SearchResults';
// import LoadingUI from './components/LoadingUI';
import Footer from './components/footer';
import Message from './components/message';



function App() {
  return (
    <Router>
      {/* <LoadingUI /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
      <Footer />
      <Message />
    </Router>
  );
}

export default App;
