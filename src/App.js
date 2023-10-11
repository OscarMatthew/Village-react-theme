import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Page from './components/pages/Page';
import Posts from './components/pages/Posts';
import Singleposts from './components/pages/Singleposts';
import Sermon from './components/pages/Sermon';
import Singlesermon from './components/pages/Singlesermon';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Browse from './components/pages/Browse';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/page' element={<Page/>} />
          <Route path='/post' element={<Posts/>} />
          <Route path='/singleposts' element={<Singleposts/>} />
          <Route path='/sermon' element={<Sermon/>} />
          <Route path='/singlesermon' element={<Singlesermon/>} />
          <Route path='/browse' element={<Browse/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
