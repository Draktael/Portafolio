// src/pages/Home.js
import React from 'react';
import Navbar from '../components/navbar';
import Herosection from '../components/herosection';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className='all'>
      <Navbar />
      <Herosection />
      <Footer />
    </div>
  );
};

export default Home;
